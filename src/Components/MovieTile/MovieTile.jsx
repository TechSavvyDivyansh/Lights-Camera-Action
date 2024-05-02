import React from 'react'
import './movietile.css'
import { Link } from 'react-router-dom'

export default function MovieTile(props) {
  return (
    <div className='movieTile' onClick={()=>{window.scrollTo(0,0)}}>
        <Link to={`/Movie/${props.id}`}><img src={props.poster} alt=''/></Link>
        <h3>{props.name}</h3>
        <p>{props.ratings}/5</p>
    </div>
  )
}
