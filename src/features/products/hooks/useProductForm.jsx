import { useState } from 'react';

export const useProductForm = onSubmit => {
  const [formData, setFormData] = useState({
    nome: '',
    preco: '',
    marca: '',
    secao: '',
    condicao: ''
  });

  const updateField = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const resetForm = () => {
    setFormData({
      nome: '',
      preco: '',
      marca: '',
      secao: '',
      condicao: ''
    });
  };

  const getLogoPath = marca => {
    if (!marca) return null;

    const logoMap = {
      HP: './assets/logos/hp-logo.png',
      Dell: './assets/logos/dell-logo.png',
      Positivo: './assets/logos/positivo-logo.png',
      Asus: './assets/logos/asus-logo.png',
      Generico: './assets/logos/generic-logo.png'
    };

    return logoMap[marca] || '/assets/logos/generic-logo.png';
  };

  const handleSubmit = () => {
    const requiredFields = ['nome', 'preco', 'marca', 'secao', 'condicao'];
    const missingFields = requiredFields.filter(field => !formData[field]);

    if (missingFields.length > 0) {
      /* eslint-disable no-alert */
      alert(`Por favor, preencha todos os campos: ${missingFields.join(', ')}`);
      return;
    }

    if (isNaN(parseFloat(formData.preco))) {
      /* eslint-disable no-alert */
      alert('Por favor, insira um preço válido!');
      return;
    }

    const productWithLogo = {
      ...formData,
      logo: getLogoPath(formData.marca)
    };

    onSubmit(productWithLogo);
    resetForm();
  };

  return {
    formData,
    updateField,
    handleSubmit,
    resetForm
  };
};
