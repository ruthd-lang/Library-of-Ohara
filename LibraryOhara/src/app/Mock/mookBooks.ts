import { Book } from '../models/book'

type BookSeed = Omit<Book, 'id'>

const onePieceCovers = [
  'https://static.wikia.nocookie.net/onepiece/images/0/0e/Volume_1.png/revision/latest/scale-to-width/360?cb=20141213103745&path-prefix=it',
  'https://m.media-amazon.com/images/I/91-hChNOKhL.jpg',
  'https://m.media-amazon.com/images/I/91b5-aiPbnL._UF1000,1000_QL80_.jpg',
  'https://m.media-amazon.com/images/I/91WvJiO9VNL._UF1000,1000_QL80_.jpg',
  'https://static.wikia.nocookie.net/onepiece/images/a/a9/Volume_104.png/revision/latest?cb=20240817155822&path-prefix=pt'
]

const cookingCover = 'https://covers.openlibrary.org/b/isbn/9780393081084-L.jpg'
const historyCovers = [
  'https://covers.openlibrary.org/b/isbn/9780062316097-L.jpg',
  'https://covers.openlibrary.org/b/isbn/9780393317558-L.jpg'
]

const onePieceBooks: BookSeed[] = Array.from({ length: 34 }, (_, index) => {
  const volume = index + 1

  return {
    title: `One Piece - Vol. ${volume}`,
    author: 'Eiichiro Oda',
    category: 'One Piece book',
    description: "A chapter from Luffy and the Straw Hat crew's ongoing journey across the Grand Line.",
    year: 1997 + Math.floor(index / 3),
    image: onePieceCovers[index % onePieceCovers.length]
  }
})

const cookingBooks: BookSeed[] = [
  ['The Joy of Cooking', 'Irma S. Rombauer, Marion Rombauer Becker, and Ethan Becker', 1931],
  ['Mastering the Art of French Cooking', 'Julia Child, Louisette Bertholle, and Simone Beck', 1961],
  ['How to Cook Everything', 'Mark Bittman', 1998],
  ['Salt Fat Acid Heat', 'Samin Nosrat', 2017],
  ['The Food Lab', 'J. Kenji Lopez-Alt', 2015],
  ['On Food and Cooking', 'Harold McGee', 1984],
  ['The Flavor Bible', 'Karen Page and Andrew Dornenburg', 2008],
  ['Essentials of Classic Italian Cooking', 'Marcella Hazan', 1992],
  ['The Silver Spoon', 'Phaidon Editors', 2005],
  ['The Professional Chef', 'The Culinary Institute of America', 1969],
  ["Cook's Illustrated Cookbook", "Cook's Illustrated", 2011],
  ['Ratio', 'Michael Ruhlman', 2009],
  ['Plenty', 'Yotam Ottolenghi', 2010],
  ['Jerusalem', 'Yotam Ottolenghi and Sami Tamimi', 2012],
  ['Plenty More', 'Yotam Ottolenghi', 2014],
  ['Ottolenghi Simple', 'Yotam Ottolenghi', 2018],
  ['Nigella Kitchen', 'Nigella Lawson', 2010],
  ['Barefoot Contessa Back to Basics', 'Ina Garten', 2008],
  ['Barefoot Contessa Foolproof', 'Ina Garten', 2012],
  ['The Fannie Farmer Cookbook', 'Marion Cunningham', 1979],
  ['Betty Crocker Cookbook', 'Betty Crocker Editors', 1950],
  ["America's Test Kitchen Cookbook", "America's Test Kitchen", 2006],
  ['The Art of Simple Food', 'Alice Waters', 2007],
  ['Indian-ish', 'Priya Krishna', 2019],
  ['Smitten Kitchen Every Day', 'Deb Perelman', 2017],
  ['Nothing Fancy', 'Alison Roman', 2019],
  ['The Whole30 Cookbook', 'Melissa Hartwig and Dallas Hartwig', 2014],
  ['The Complete Mediterranean Cookbook', "America's Test Kitchen", 2016],
  ['Japanese Home Cooking', 'Sonoko Sakai', 2016],
  ['To Asia, with Love', 'Hetty Lui McKinnon', 2022],
  ['The New Moosewood Cookbook', 'Mollie Katzen', 1977],
  ['Everyday Italian', 'Giada De Laurentiis', 2005],
  ['Bittman Bread', 'Mark Bittman', 2021],
  ["The Bread Baker's Apprentice", 'Peter Reinhart', 2001],
  ['The Pioneer Woman Cooks', 'Ree Drummond', 2009]
].map(([title, author, year], index) => ({
  title,
  author,
  category: 'Cooking Books',
  description: 'A real cookbook entry for the presentation mock, kept simple and recognizable.',
  year,
  image: cookingCover
})) as BookSeed[]

const historyBooks: BookSeed[] = [
  ['Sapiens', 'Yuval Noah Harari', 2011],
  ['Homo Deus', 'Yuval Noah Harari', 2015],
  ['Guns, Germs, and Steel', 'Jared Diamond', 1997],
  ['The Silk Roads', 'Peter Frankopan', 2015],
  ["A People's History of the United States", 'Howard Zinn', 1980],
  ['The Rise and Fall of the Third Reich', 'William L. Shirer', 1960],
  ['1491', 'Charles C. Mann', 2005],
  ['1493', 'Charles C. Mann', 2011],
  ['The Lessons of History', 'Will and Ariel Durant', 1968],
  ['SPQR', 'Mary Beard', 2015],
  ['The Crusades: The Authoritative History of the War for the Holy Land', 'Thomas Asbridge', 2010],
  ['The Black Death', 'Philip Ziegler', 1969],
  ['The First World War', 'John Keegan', 1998],
  ['The Second World War', 'Antony Beevor', 2012],
  ['Postwar', 'Tony Judt', 2005],
  ['The Warmth of Other Suns', 'Isabel Wilkerson', 2010],
  ['Team of Rivals', 'Doris Kearns Goodwin', 2005],
  ['Grant', 'Ron Chernow', 2017],
  ['The Bully Pulpit', 'Doris Kearns Goodwin', 2013],
  ['The Splendid and the Vile', 'Erik Larson', 2020],
  ['The Wright Brothers', 'David McCullough', 2015],
  ['The Pioneers', 'David McCullough', 2019],
  ['John Adams', 'David McCullough', 2001],
  ['The Path Between the Seas', 'David McCullough', 1977],
  ['The Greater Journey', 'David McCullough', 2011],
  ['The Dawn of Everything', 'David Graeber and David Wengrow', 2021],
  ['The History of the Ancient World', 'Susan Wise Bauer', 2007],
  ['A History of the World in 6 Glasses', 'Tom Standage', 2005],
  ['The Guns of August', 'Barbara Tuchman', 1962],
  ['The Age of Revolution: 1789-1848', 'Eric Hobsbawm', 1962],
  ['The Age of Capital: 1848-1875', 'Eric Hobsbawm', 1975],
  ['The Age of Empire: 1875-1914', 'Eric Hobsbawm', 1987],
  ['The Age of Extremes', 'Eric Hobsbawm', 1994],
  ['A Little History of the World', 'E. H. Gombrich', 1935],
  ['The Story of the Ancient World', 'Philip Freeman', 2010]
].map(([title, author, year], index) => ({
  title,
  author,
  category: 'History Books',
  description: 'A real history title for the presentation mock, focused on widely recognized nonfiction.',
  year,
  image: historyCovers[index % historyCovers.length]
})) as BookSeed[]

export const mockBooks: Book[] = [
  ...onePieceBooks.map((book, index) => ({
    id: index + 1,
    ...book
  })),
  ...cookingBooks.map((book, index) => ({
    id: onePieceBooks.length + index + 1,
    ...book
  })),
  ...historyBooks.map((book, index) => ({
    id: onePieceBooks.length + cookingBooks.length + index + 1,
    ...book
  }))
]
