export interface Movie {
  id: number;
  name: string;
  genre: string;
  image: string;
  releaseYear: string;
}

export const movies: Movie[] = [
  {
    id: 1,
    name: 'The Terminator',
    genre: 'Sci-fi',
    image:
      'https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY999_CR0,0,672,999_AL_.jpg',
    releaseYear: '1984',
  },
  {
    id: 2,
    image:
      'https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZDY2MjQ1OWViZjFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,666,1000_AL_.jpg',
    name: 'Terminator 2: Judgement Day',
    genre: 'Sci-fi',
    releaseYear: '1991',
  },
  {
    id: 3,
    image:
      'https://m.media-amazon.com/images/M/MV5BMTcwODc1MTMxM15BMl5BanBnXkFtZTYwMDg1NzY3._V1_.jpg',
    name: `Pirates of the Caribbean: Dead Man's Chest`,
    genre: 'Action/Adventure',
    releaseYear: '2006',
  },
  {
    id: 4,
    image:
      'https://m.media-amazon.com/images/M/MV5BMTY3NjY0MTQ0Nl5BMl5BanBnXkFtZTcwMzQ2MTc0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
    name: `Despicable Me`,
    genre: 'Animation',
    releaseYear: '2010',
  },
  {
    id: 5,
    image:
      'https://m.media-amazon.com/images/M/MV5BMTQ0NDcyNjg0MV5BMl5BanBnXkFtZTgwMzk4NTA4MTE@._V1_SY1000_CR0,0,631,1000_AL_.jpg',
    name: `A Million Ways to Die in the West`,
    genre: 'Comedy/Western',
    releaseYear: '2014',
  },
  {
    id: 6,
    image:
      'https://m.media-amazon.com/images/M/MV5BNDU4Mzc3NzE5NV5BMl5BanBnXkFtZTgwMzE1NzI1NzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
    name: `Pokémon Detective Pikachu`,
    genre: 'Action/Comedy',
    releaseYear: '2019',
  },
  {
    id: 7,
    image:
      'https://m.media-amazon.com/images/M/MV5BMTYzMDM4NzkxOV5BMl5BanBnXkFtZTgwNzM1Mzg2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
    name: 'Toy Story 4',
    genre: 'Animation/Comedy',
    releaseYear: '2019',
  },
];
