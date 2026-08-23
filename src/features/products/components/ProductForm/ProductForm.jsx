import { Button } from '../../../../components/ui/Button/Button';
import { Input } from '../../../../components/ui/Input/Input';
import { RadioGroup } from '../../../../components/ui/RadioGroup/RadioGroup';
import { Select } from '../../../../components/ui/Select/Select';
import { useProducts } from '../../../../context/ProductContext';
import { BRANDS, getSectionNames } from '../../../../utils/constants';
import { useProductForm } from '../../hooks/useProductForm';
import styles from './style.module.css';

const ProductForm = () => {
  const { addProduct } = useProducts();
  const { formData, updateField, handleSubmit } = useProductForm(addProduct);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Cadastrar Novo Produto</h2>

        <Input
          label='Nome do Produto'
          placeholder='Digite o nome do produto'
          value={formData.nome}
          onChange={value => updateField('nome', value)}
          required
        />

        <Input
          label='Preço (R$)'
          placeholder='Ex: 1299.99'
          value={formData.preco}
          onChange={value => updateField('preco', value)}
          required
        />

        <Select
          label='Marca'
          options={BRANDS}
          value={formData.marca}
          onChange={value => updateField('marca', value)}
        />

        <Select
          label='Seção'
          options={getSectionNames()}
          value={formData.secao}
          onChange={value => updateField('secao', value)}
        />

        <RadioGroup
          label='Estado do Produto'
          name='condicao'
          options={[
            { value: 'novo', label: 'Novo' },
            { value: 'usado', label: 'Usado' }
          ]}
          value={formData.condicao}
          onChange={value => updateField('condicao', value)}
        />

        <div className={styles.actions}>
          <Button onClick={handleSubmit}>Cadastrar Produto</Button>
        </div>
      </div>
    </section>
  );
};

export default ProductForm;
