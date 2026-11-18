import { useTranslation } from 'react-i18next';
import Signout from './Signout';
import Menu from './Menu';

export default function Navbar() {
  const { t } = useTranslation();
  return (
    <nav className='navbar'>
      <span className="text-2xl font-extrabold">{t('appName')}</span>
      <Menu />
      <Signout />
    </nav>
  );
}
