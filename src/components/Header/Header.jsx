import styles from './header.module.scss';

const Header = ({ children }) => {
  return <div className={styles.inner}>{children}</div>;
};

export default Header;
