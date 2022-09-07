import React, {useEffect} from 'react';
import { useState } from 'react';
import Tmdb from './Tmdb';

export default () =>{

  const [movieList, setMovieList] = useState([]);

  useEffect(()=>{
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();

      setMovieList(list);
    }

    loadAll();
  },[])


  return (

    <div>
      olá mundo
    </div>
  );
}