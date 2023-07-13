import styles from './forecast.module.scss';

import Header from '@components/Header/Header';

const Forecast = () => {
  return (
    <div className={styles.forecast}>
      <Header>
        <h1>Start </h1>
      </Header>
    </div>
  );
};

export default Forecast;
