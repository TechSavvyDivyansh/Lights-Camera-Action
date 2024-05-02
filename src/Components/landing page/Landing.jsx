import React, { useEffect } from 'react'
import Background from '../background/Background';
import Hero from '../hero/Hero';
import { useState } from 'react';

import './landing.css'



export default function Landing() {
    let movie=[
        {text1:"Dive Into",text2:"World of Bollywood"},
        {text1:"With The",text2:"pvr cinemas"},
        {text1:"Watch latest",text2:"and Popular movies"}
      ]
    
    let [HeroImg,setHeroImg]=useState(2)
    let [PlayStatus,setPlayStatus]=useState(false)

    useEffect(() => {
        const intervalId = setInterval(() => {
          setHeroImg((count) => (count === 2 ? 0 : count + 1));
        }, 3000);
      
        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
      }, []);
    
    return (
        
        <div className='landing'>
            <Background HeroImg={HeroImg} PlayStatus={PlayStatus}/>
            <Hero movie={movie[HeroImg]} setPlayStatus={setPlayStatus} setHeroImg={setHeroImg} HeroImg={HeroImg} PlayStatus={PlayStatus}/>
        </div>
    )
}
