import React, { useContext } from 'react'
import './cinema.css'
import { movieContext } from '../../Context/MovieContext'
import cinemaimg from '../assets/ticket-bookingPopup/cinemas.png'

export default function CinemaSelect() {
    const {cinemas,City,setPopupselect,SelectCinema,SetSelectCinema}=useContext(movieContext)

    let citydata=[]

    citydata=(cinemas.find((city,i)=>city.city===City)).cin  


  return (
    <div className='cinema'> 
            <i className='bx bx-chevron-left' onClick={()=>{setPopupselect(0)}}></i>
            <div className="cinema-left">
                {citydata.map((cinema,i)=>{
                        return <h2 key={i} onClick={()=>{
                          SetSelectCinema(cinema)
                          setPopupselect(2)
                        }}>{cinema}</h2>
                })} 
            </div>
            <div className="cinema-right">
                <img src={cinemaimg} alt="" />
            </div>
    </div>
  )
}
