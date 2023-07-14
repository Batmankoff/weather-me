import styles from './header.module.scss';

import Logo from '@components/Logo/Logo';

const Header = () => {
  return (
    <div className={styles.inner}>
      <Logo />
      <h1 className={styles.title}>WeatherMe</h1>
    </div>
  );
};

export default Header;
