import styles from './style.module.css';

export const Input = ({
  label,
  placeholder,
  value,
  onChange,
  required = false
}) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  );
};
