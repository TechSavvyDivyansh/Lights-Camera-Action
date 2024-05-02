import React from 'react'
import './Movies.css'

import all_movies from '../assets/movies.js'
import MovieTile from '../MovieTile/MovieTile.jsx'

export default function Movies() {
  return (
    <div className='movies'>
        {all_movies.map((movie,i)=>{
            return <MovieTile key={i} id={movie.id} name={movie.name} poster={movie.poster} ratings={movie.ratings}/>
        })}
    </div>
  )
}
