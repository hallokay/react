import React from 'react';
import { Link } from 'react-router-dom'

const Movie = ({movie}) => {
  
  return (
    <div>
      <img src={movie.medium_cover_image} alt={movie.medium_cover_image} />
      <Link to={`/detail/${movie.id}`}>{movie.title}</Link>
      <span>{movie.rating}</span>
      <ul>
      {movie.genres.map(g => (
          <li key={g}>{g}</li>
      ))}
      </ul>
      <p>{movie.summary}</p>

    </div>
  )
}

export default Movie