import styles from './style.module.css';

const Banner = () => {
  return (
    <header className={styles.header}>
      <div className={styles.emblem}></div>

      <h1 className={styles.title}>Digital Sanca</h1>

      <h2 className={styles.subtitle}>
        Tecnologia, potência e inovação
      </h2>
    </header>
  );
};

export default Banner;