import React, { useContext } from 'react'
import './MovieDisplay.css'
import { movieContext } from '../../Context/MovieContext'

export default function MovieDisplay(props) {
    let {popClosefn,SetSelectMovie,setPopupselect,resetseats}=useContext(movieContext)
  return (
    <div className='movieDisplay'>
        <div className="moviedisp-container-up">
            <img src={props.Movie.poster} alt="" />
            <div className="content">
                <div className="mov-name">
                    <h2>{props.Movie.name}</h2>
                    <p>({props.Movie.ratings}/5)</p>
                </div>
                <p className='mov-desc'>{props.Movie.description}</p>
                <p>{props.Movie.duration}hrs</p>
                <p>CAST: <span>{props.Movie.cast}</span></p>
                <button onClick={()=>{
                    popClosefn()
                    SetSelectMovie(props.Movie.name)
                    setPopupselect(0)
                    resetseats()

                }}>BOOK TICKETS</button>
            </div>
        </div>
        
        <div className="moviedisp-container-down">
            <img src={props.Movie.img1} alt="" />
            <video controls><source src={props.Movie.trailer}/></video>
            <img src={props.Movie.img2} alt="" />
        </div>
    </div>
  )
}
