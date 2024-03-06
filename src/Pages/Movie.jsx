import React, { useContext } from 'react'
import { movieContext } from '../Context/MovieContext'
import MovieDisplay from '../Components/MovieDisplay/MovieDisplay'
import { useParams } from 'react-router-dom'
import BookingPop from '../Components/BookingPopup/BookingPop'

export default function Movie() {
  const {all_Movies,ClosePop}=useContext(movieContext)
  const {MovieId}=useParams()
  const Movie=all_Movies.find((e)=>e.id===Number(MovieId))


  return (
    <div>
        <MovieDisplay Movie={Movie}/>
        {ClosePop?"":<BookingPop Movie={Movie}/>}
        
    </div>
  )
}
