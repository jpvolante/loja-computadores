import ProductCard from '../../products/components/ProductCard/ProductCard';

const SectionItem = ({ section, products }) => {
  if (products.length === 0) {
    return null;
  }

  return (
    <section
      style={{
        textAlign: 'center',
        padding: '60px 20px',
        backgroundColor: section.corSecundaria
      }}
    >
      <h3
        style={{
          fontSize: '36px',
          borderBottom: `4px solid ${section.corPrimaria}`,
          display: 'inline-block',
          paddingBottom: '12px',
          marginBottom: '40px',
          color: '#1f2937',
          fontWeight: 'bold'
        }}
      >
        {section.nome}
      </h3>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '24px',
          marginTop: '40px'
        }}
      >
        {products.map(product => (
          <ProductCard
            key={`${product.nome}-${product.marca}-${product.preco}`}
            nome={product.nome}
            preco={product.preco}
            logo={product.logo}
            marca={product.marca}
            condicao={product.condicao}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionItem;
