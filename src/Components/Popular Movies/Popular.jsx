import React, { useContext } from 'react'
import { movieContext } from '../../Context/MovieContext'
import MovieTile from '../MovieTile/MovieTile'
import './Popular.css'

export default function TopPics() {

  const {all_Movies}=useContext(movieContext)
  return (

    <div className='popular'>
          
                <div className="popularContainer">
                      <p className='movie-type'>ACTION AND THRILLER <hr/></p>
                      <div className="popularmovie-list">
                          {all_Movies.map((movie,i)=>{
                            if(movie.ratings>=4.5 && movie.category==="Action"||movie.category==="Thriller")
                            {
                              return <MovieTile key={i} id={movie.id} name={movie.name} poster={movie.poster} ratings={movie.ratings}/>
                            }
                          })}
                      </div>
                </div>


                <div className="popularContainer">
                      <p className='movie-type'>DRAMA <hr/></p>
                      <div className="popularmovie-list">
                          {all_Movies.map((movie,i)=>{
                            if(movie.ratings>=4.5 && movie.category==="Drama")
                            {
                              return <MovieTile key={i} id={movie.id} name={movie.name} poster={movie.poster} ratings={movie.ratings}/>
                            }
                          })}
                      </div>
                </div>

                    
                <div className="popularContainer">
                      <p className='movie-type'>FANTASY AND FICTION <hr/></p>
                      <div className="popularmovie-list">
                          {all_Movies.map((movie,i)=>{
                            if(movie.ratings>=4.5 && movie.category==="Fantasy")
                            {
                              return <MovieTile key={i} id={movie.id} name={movie.name} poster={movie.poster} ratings={movie.ratings}/>
                            }
                          })}
                      </div>
                </div>


    </div>
  )
}
