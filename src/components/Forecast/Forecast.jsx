import styles from './forecast.module.scss';

import Header from '@components/Header/Header';

const Forecast = () => {
  return (
    <div className={styles.forecast}>
      <Header />
    </div>
  );
};

export default Forecast;
