import { useProducts } from '../../../context/ProductContext';
import { SECTIONS } from '../../../utils/constants';

import SectionItem from './SectionItem';

const SectionList = () => {
  const { getProductsBySection } = useProducts();

  return (
    <div>
      {SECTIONS.map(section => {
        const sectionProducts = getProductsBySection(section.nome);

        return (
          <SectionItem
            key={section.nome}
            section={section}
            products={sectionProducts}
          />
        );
      })}
    </div>
  );
};

export default SectionList;
