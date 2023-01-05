import React from 'react';
import { useEffect, useState } from "react";
import Movie from '../component/Movie';


const Home = () => {
  //무비앱
  const [loading, setLoading] = useState(true);
  const [movieArr, setMovieArr] = useState([]);
  const fetchMovies = async () => {
    const url = "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year";
    // const response = await fetch(url);
    // const jsonData = await response.json();

    const jsonData = await(
      await fetch(url)
    ).json();
    // console.log(jsonData);
    setMovieArr(jsonData.data.movies);
    setLoading(false);


  };
  useEffect(() => {
    fetchMovies();
  }, []);

  return(
    <div>
      <h1>MOVIE APP</h1>
      {loading ? (<strong>Loading...</strong>) : (
        <ul>
          {movieArr.map(movie => (
            // console.log(movie)
            <Movie key={movie.id} movie={movie} />
          ))}
        </ul>
      )}

    </div>
  )

}

export default Home