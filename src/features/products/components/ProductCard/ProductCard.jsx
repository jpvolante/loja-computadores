import styles from './style.module.css';

const ProductCard = ({ nome, preco, logo, marca, condicao }) => {
  const CondicaoFooter = ({ condicao }) => {
    if (!condicao) return null;

    const isNovo = condicao === 'novo';

    return (
      <div
        className={`${styles.condicao} ${isNovo ? styles.condicaoNovo : styles.condicaoUsado}`}
      >
        <span style={{ fontSize: '14px' }}>{isNovo ? '✨' : '🔄'}</span>
        <span
          className={
            isNovo ? styles.condicaoTextNovo : styles.condicaoTextUsado
          }
        >
          {isNovo ? 'Produto Novo' : 'Produto Usado'}
        </span>
      </div>
    );
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <div className={styles.placeholder}>📦</div>
      </div>

      <div className={styles.content}>
        <h4 className={styles.title}>{nome}</h4>

        <div className={styles.brand}>
          <img
            src={logo}
            alt={`Logo ${marca}`}
            className={styles.brandLogo}
            onError={e => {
              e.target.style.display = 'none';
            }}
          />
          <h5 className={styles.brandName}>{marca}</h5>
        </div>

        <div className={styles.price}>
          R{'$ '}
          {parseFloat(preco).toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })}
        </div>

        <CondicaoFooter condicao={condicao} />
      </div>
    </div>
  );
};

export default ProductCard;
