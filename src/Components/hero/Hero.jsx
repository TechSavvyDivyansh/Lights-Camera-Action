import React from 'react'
import './Hero.css'
import play_btn from '../assets/play_icon.png'
import pause_btn from '../assets/pause_icon.png'

export default function Hero({movie,setPlayStatus,setHeroImg,HeroImg,PlayStatus}) {
  return (
    <div className='hero'>
        <div className="hero-text">
            <p className='text1'>{movie.text1}</p>
            <p className='text2'>{movie.text2}</p>
            <button>EXPLORE MORE</button>
        </div>
        <div className="hero-main">
            <ul className={PlayStatus?"hero-toggle hide":"hero-toggle"}>
                <li className={HeroImg===0?"hero-toggle-btns orange":"hero-toggle-btns"} onClick={()=>{setHeroImg(0)}}></li>
                <li className={HeroImg===1?"hero-toggle-btns orange":"hero-toggle-btns"} onClick={()=>{setHeroImg(1)}}></li>
                <li className={HeroImg===2?"hero-toggle-btns orange":"hero-toggle-btns"} onClick={()=>{setHeroImg(2)}}></li>
            </ul>
            <div className="play-vid">
                <p>FEEL THE WORLD OF MOVIES</p>
                <img src={PlayStatus?pause_btn:play_btn} alt="" onClick={()=>{setPlayStatus(!PlayStatus)}}/>
            </div>
        </div>


    </div>
  )
}
