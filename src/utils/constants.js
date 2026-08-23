export const BRANDS = ['HP', 'Dell', 'Positivo', 'Asus', 'Xing Ling genérico'];

export const SECTIONS = [
  {
    nome: 'Computadores',
    corPrimaria: '#3b82f6',
    corSecundaria: '#eff6ff'
  },
  {
    nome: 'Acessórios',
    corPrimaria: '#10b981',
    corSecundaria: '#ecfdf5'
  },
  {
    nome: 'Impressoras',
    corPrimaria: '#f59e0b',
    corSecundaria: '#fffbeb'
  },
  {
    nome: 'Games',
    corPrimaria: '#8b5cf6',
    corSecundaria: '#f3e8ff'
  },
  {
    nome: 'Gadgets',
    corPrimaria: '#ef4444',
    corSecundaria: '#fef2f2'
  }
];

export const getSectionNames = () =>
  SECTIONS.map(section => section.nome.replaceAll('|', '').trim());

export const getSectionByName = name =>
  SECTIONS.find(section => section.nome === name);
