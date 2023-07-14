import styles from './forecast.module.scss';

import Header from '@components/Header/Header';
import Content from '@components/Content/Content';

const Forecast = () => {
  return (
    <div className={styles.inner}>
      <Header />
      <Content />
    </div>
  );
};

export default Forecast;
