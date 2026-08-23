import { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProduct = product => {
    setProducts(prevProducts => [...prevProducts, product]);
  };

  const getProductsBySection = sectionName => {
    return products.filter(product => product.secao === sectionName);
  };

  const value = {
    products,
    addProduct,
    getProductsBySection
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
