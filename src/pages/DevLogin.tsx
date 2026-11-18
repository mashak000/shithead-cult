import { Navigate } from 'react-router';
import { supabase } from '../utils/supabase';
import googleLogo from '../assets/g_logo.svg';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useAuth } from '../auth/auth-context';
import Button from '../components/ui/Button';

export default function DevLogin() {
  const { t } = useTranslation();
  const { session, isLoading } = useAuth();
  const [isStartingSignIn, setIsStartingSignIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSignInWithGoogle() {
    setIsStartingSignIn(true);
    setErrorMessage(null);

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/login`,
        },
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      console.error('Could not start Google sign-in:', error);

      setErrorMessage('Could not start sign-in. Please try again.');
      setIsStartingSignIn(false);
    }
  }

  if (isLoading) {
    return <p role="status">Checking your session…</p>;
  }

  if (session) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className=" flex flex-col text-center min-h-dvh items-center justify-evenly bg-retro-surface p-4">
      <section className="flex-col items-center gap-6 text-center">
        <h2 className="mb-3 whitespace-pre-line text-2xl leading-none">
          {t('auth.login')}
        </h2>

        <Button
          onClick={handleSignInWithGoogle}
          disabled={isStartingSignIn}
          className="w-full comic-relief"
        >
          <img src={googleLogo} className="mr-10" />
          {isStartingSignIn ? 'Opening Google…' : t('auth.login')}
        </Button>


        {errorMessage && (
          <p role="alert" className="mt-4">
            {errorMessage}
          </p>
        )}
      </section>
    </main>
  );
}
