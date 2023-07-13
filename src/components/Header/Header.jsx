import styles from './header.module.scss';

import Logo from '@components/Logo/Logo';

const Header = ({ children }) => {
  return (
    <div className={styles.inner}>
      <Logo />
    </div>
  );
};

export default Header;
