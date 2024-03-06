import React, { useContext } from 'react'
import './timeselect.css'
import showtime from '../assets/ticket-bookingPopup/showtime.png'
import { movieContext } from '../../Context/MovieContext'


export default function TimeSelect(props) {
  let {setPopupselect,SetSelectTimeSlot ,SetSelectDate,SelectDate}=useContext(movieContext)  
  let show=[]

  const startTime = 8;
  const endTime = 24;
  const movieDuration = props.Movie.duration;

  let c=startTime
  while(c<=endTime)
  {
    if(c===12)
    {
      show.push(c+" Noon")
    }
    else if(c===24)
    {
      show.push((c-12)+" Midnight")
    }
     else if(c<=12)
     {
       show.push(c+" a.m.")
     }
     else
     {
      show.push((c-12)+" p.m.")
     }
     c=c+movieDuration+1
  }
  

  return (
    <div className='time'> 
            <i className='bx bx-chevron-left' onClick={()=>{setPopupselect(1)}}></i>
            <div className="time-left">
                 <input type="date" name="" id="" className=''value={SelectDate} onChange={(e)=>{SetSelectDate(e.target.value)}}/>
                 {show.map((show,i)=>{
                    return <h2 key={i} onClick={()=>{
                        SetSelectTimeSlot(show)
                        setPopupselect(3)
                    }}>{show}</h2>
                 })}
            </div>
            <div className="time-right">
                <img src={showtime} alt="" />
            </div>
    </div>
  )
}
