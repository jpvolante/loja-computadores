import styles from './style.module.css';

export const Select = ({ label, options, value, onChange }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>
      <select
        onChange={e => onChange(e.target.value)}
        value={value}
        className={styles.select}
      >
        <option value=''>Selecione uma opção...</option>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
