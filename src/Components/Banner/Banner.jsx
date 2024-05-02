import React from 'react'
import './Banner.css'
import movie from '../assets/banner/movie.png'
import untitled from '../assets/banner/Untitled.png'


export default function Banner() {
  return (
    <div className='banner'> 
            <div className="actors">
                    <img src={untitled} alt="" />
            </div>
            <div className="advertise">
                <img src={movie} alt="" className='movietime'/> 
                <div className="text">
                        <p className='topmovie-text1'>EXPLORE THE TOP TRENDING MOVIES OF THE ERA</p>
                        <p className='topmovie-text2'>Enjoy the latest collection action,drama,fantacy</p> 
                </div>
            </div>
    
    </div>
  )
}
