export const stores = [
  {
    name: 'IKEA',
    image: require('../assets/ikea.jpg'),
    id: 1,
  },
  {
    name: 'Coffee House',
    image: require('../assets/coffee.jpg'),
    id: 2,
  },
  {
    name: 'Spoon Soup',
    image: require('../assets/soup.jpg'),
    id: 3,
  },
];

export const idExtractor = (item) => item.id;
