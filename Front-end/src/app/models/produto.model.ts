export interface Produto {
  id: number;
  nome: string;
  categoria: string;
  preco: number;
  titulo: string;
  descricao: string;
  imagem: string;
}

export const produtos = [
  {
    id: 1,
    nome: 'tenis 1',
    categoria: 'categoria 1',
    preco: 349.90,
    descricao: 'Um tenis bem bonito',
    imagem: '../../../../assets/image 9.svg'
  },
  {
    id: 2,
    nome: 'tenis 2',
    categoria: 'categoria 2',
    preco: 649.90,
    descricao: 'Um tenis bem bonito, mais bonito ainda',
    imagem: '../../../../assets/image 9.svg'
  },
  {
    id: 3,
    nome: 'tenis 3',
    categoria: 'categoria 3',
    preco: 149.90,
    descricao: 'Um tenis bem bonito, porém barato',
    imagem: '../../../../assets/image 9.svg'
  },
  {
    id: 3,
    nome: 'tenis 3',
    categoria: 'categoria 3',
    preco: 149.90,
    descricao: 'Um tenis bem bonito, porém barato',
    imagem: '../../../../assets/image 9.svg'
  }

];

