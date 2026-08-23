import styles from './style.module.css';

export const RadioGroup = ({ label, name, options, value, onChange }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.groupLabel}>{label}</label>
      <div className={styles.options}>
        {options.map(option => (
          <label
            key={option.value}
            className={styles.option}
            data-selected={value === option.value}
          >
            <input
              type='radio'
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={e => onChange(e.target.value)}
              className={styles.radio}
            />
            <span
              className={
                value === option.value
                  ? styles.optionLabelSelected
                  : styles.optionLabel
              }
            >
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};
