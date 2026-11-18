import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { supabase } from '../utils/supabase';
import Button from './ui/Button';
import Modal from './ui/Modal';

export default function Signout() {
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { t } = useTranslation();

  async function handleSignout() {
    const { error } = await supabase.auth.signOut();
    setErrorMessage(error?.message ?? null);
  }
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        {t('auth.signout')}
      </Button>
      <Modal
        title={t('auth.signout')}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <p className="mb-4">{t('auth.sure')}</p>
        <Button onClick={handleSignout}>{t('yes')}</Button>
      </Modal>
      {errorMessage && <p>ERROR</p>}
    </>
  );
}
