import React from 'react'
import './background.css'

import backimg1 from '../assets/pvr/background1.png'
import backimg2 from '../assets/pvr/Background2.jpg'
import backimg3 from '../assets/pvr/Background3.jpg'

// import pvr_vid from '../assets/pvr/pvr.mp4'

export default function Background(props) {
  if(props.PlayStatus)
  {
    return(
        <div className='background'>
            <video autoPlay muted loop className="fadein"><source src={"https://firebasestorage.googleapis.com/v0/b/lights-camera-action-5c0ae.appspot.com/o/pvr.mp4?alt=media&token=41be5258-ef07-4f52-96c5-ef344f098b43"}/></video>
        </div>
    )
  }
  else if(props.HeroImg===0)
  {
    return (
        <div className='background'>
            <img src={backimg1} alt="" className='fadein'/>
        </div>
      )
  }
  else if(props.HeroImg===1)
  {
    return (
        <div className='background'>
            <img src={backimg2} alt="" className='fadein'/>
        </div>
      )
  }
  else if(props.HeroImg===2)
  {
    return (
        <div className='background'>
            <img src={backimg3} alt="" className='fadein'/>
        </div>
      )
  }
}
