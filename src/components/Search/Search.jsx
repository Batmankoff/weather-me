import styles from './search.module.scss';

const Search = ({ onSubmit, search, onChange }) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label className={styles.label}>
        <input
          className={styles.input}
          type='text'
          value={search}
          onChange={(e) => onChange(e)}
        />
      </label>
    </form>
  );
};

export default Search;
