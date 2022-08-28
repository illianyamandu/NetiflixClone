const API_KEY = 'c01e3675a7a5ab22f0a1b0d9b0b6c53b';
const API_BASE = 'https://api.themoviedb.org/3';

/*
- Filmes originais da NETIFLIX
- Filmes recomendados (trending)
- Filmes em alta (top rated)
- ação
- comédia
- terror
- romance
- documentários
*/
const basicFetch = async (endpoint) =>{
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
}


export default {
  getHomeList: async () => {
    return[
      {
        slug: 'originals',
        title: 'Originais da NETIFLIX',
        items: []
      },
      {
        slug: 'trending',
        title: 'Recomendados para você',
        items: []
      },
      {
        slug: 'toprated',
        title: 'Em alta',
        items: []
      },
      {
        slug: 'action',
        title: 'Ação',
        items: []
      },
      {
        slug: 'comedy',
        title: 'Comdédia',
        items: []
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: []
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: []
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: []
      },
    ];
  }
}