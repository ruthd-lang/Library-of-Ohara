import { Book } from '../models/book'

export const mockBooks: Book[] = [
  {
    id: 1,
    title: 'Dom Casmurro',
    author: 'Machado de Assis',
    category: 'Romance',
    description: 'Clássico da literatura brasileira que aborda ciúmes e memória.',
    year: 1899
  },
  {
    id: 2,
    title: '1984',
    author: 'George Orwell',
    category: 'Ficção',
    description: 'Uma distopia sobre vigilância e controle do Estado.',
    year: 1949
  },
  {
    id: 3,
    title: 'O Hobbit',
    author: 'J.R.R. Tolkien',
    category: 'Fantasia',
    description: 'A aventura de Bilbo Bolseiro em uma jornada épica.',
    year: 1937
  },
  {
    id: 4,
    title: 'A Culpa é das Estrelas',
    author: 'John Green',
    category: 'Romance',
    description: 'Uma história emocionante sobre amor e superação.',
    year: 2012
  },
  {
    id: 5,
    title: 'Clean Code',
    author: 'Robert C. Martin',
    category: 'Tecnologia',
    description: 'Boas práticas para escrever código limpo e sustentável.',
    year: 2008
  }
];