import React, { useContext } from 'react'
import './city.css'
import { movieContext } from '../../Context/MovieContext'
import city_img from '../assets/ticket-bookingPopup/city.png'

export default function CityList() {
    const {cinemas,SetCity,setPopupselect,popClosefn}=useContext(movieContext)

  return (
    <div className='city'> 
            <i className='bx bx-chevron-left' onClick={()=>{popClosefn()}}></i>
            <div className="city-left">
                {cinemas.map((city,i)=>{
                    return <h2 key={i} onClick={()=>{
                      SetCity(city.city)
                      setPopupselect(1)

                    }}>{city.city}</h2>
                })}
            </div>
            <div className="city-right">
                <img src={city_img} alt="" />
            </div>
    </div>
  )
}
