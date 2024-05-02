import React, { useContext } from 'react'
import './selectseat.css'
import { movieContext } from '../../Context/MovieContext'


export default function CityList() {

    const {setPopupselect,bookRecliner,bookPrime,bookLounge,SelectRecliner,SelectPrime,SelectLounge}=useContext(movieContext)


  return (
    <div className='seat'> 
            <i className='bx bx-chevron-left' onClick={()=>{setPopupselect(2)}}></i>
            <div className="seat-arrangement">
                  <div className="seatgrid recliner">
                          <p>Recliner Seats ₹400</p>
                          <div className="seats">
                              {Object.keys(SelectRecliner).map((seat,i)=>{
                                return <div onClick={()=>{bookRecliner(seat)}} className={SelectRecliner[seat]===1?"singleseat green":"singleseat"} key={i}>{seat}</div>
                              })}
                          </div>
                  </div>
                  <div className="seatgrid prime">
                          <p>Prime Seats ₹350</p>
                          <div className="seats">
                              {Object.keys(SelectPrime).map((seat,i)=>{
                                return <div onClick={()=>{bookPrime(seat)}} className={SelectPrime[seat]===1?"singleseat green":"singleseat"} key={i}>{seat}</div>
                              })}
                          </div>
                  </div>
                  <div className="seatgrid lounge">
                          <p>Lounge Seats ₹200</p>
                          <div className="seats">
                              {Object.keys(SelectLounge).map((seat,i)=>{
                                return <div onClick={()=>{bookLounge(seat)}} className={SelectLounge[seat]===1?"singleseat green":"singleseat"} key={i}>{seat}</div>
                              })}
                          </div>
                  </div>
                    <div className="screendiv">
                        EYES THIS WAY PLEASE
                        <div className="screen"></div>
                    </div>
            </div>
            <div className="seat-right">
                  <button onClick={()=>{setPopupselect(4)}}>PROCEED</button>
            </div>
            <div className="seatlegend">
                  <div className="seatlegendcontain selected">
                        <div></div>
                        <p>Selected</p>
                  </div>
                  <div className="seatlegendcontain unselected">
                        <div></div>
                        <p>UnSelected</p>
                  </div>
            </div>
    </div>
  )
}
