import styles from './style.module.css';

export const Button = ({ children, onClick, variant = 'primary' }) => {
  return (
    <div
      role='button'
      tabIndex={0}
      onClick={onClick}
      onKeyUp={onClick}
      className={styles.button}
      data-variant={variant}
    >
      {children}
    </div>
  );
};
