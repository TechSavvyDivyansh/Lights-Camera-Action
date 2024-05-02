import React, { useContext } from 'react'
import { movieContext } from '../../Context/MovieContext'
import './payement.css'
import logo1 from '../assets/ticket-bookingPopup/payement/mastercard.png'
import logo2 from '../assets/ticket-bookingPopup/payement/visa.png'
import sim from '../assets/ticket-bookingPopup/payement/creditsim.png'

export default function Payement() {
  const {setPopupselect,totalCost}=useContext(movieContext)

  let Payable=()=>{
    if(totalCost()===0)
    {
      return <p className='errorred'>You Have not selected any seat!! Please Select A seat</p>
    }
    else
    {
      return <p className='totalamt-cost'>₹{totalCost()}</p>
    }
  }

  let proceed=()=>{
    if(totalCost()!==0 )
    {
       return <p className='proceed' onClick={()=>{setPopupselect(5)}}>PROCEED</p>
    }
    else return ""
  }

  return (
    <div className='payement'> 
            <i className='bx bx-chevron-left' onClick={()=>{setPopupselect(3)}}></i>
            <div className="payementcontainer">
                <p className='totalc'>TotalCost: {Payable()}</p>
                <input type="text" placeholder='ENTER PHONE NUMBER'/>
                <div className="creditcard">
                    <div className="circle c1"></div>
                    <div className="circle c2"></div>
                    <div className="card">
                      <p>LIGHTS CAMERA ACTION</p>
                        <div className="cardcontent">
                              <div className="cardno">
                                    <img src={sim} alt="" />
                                    <input type="text" className='idno' name="" id="" placeholder='Enter card number'/>
                              </div>
                              <div className="cardinfo">
                                  <div className="cardinfo-input">
                                      <input type="date" name="" id=""/>
                                      <input type="text" placeholder="Enter Card holder's name"/>
                                  </div>
                                  <input type="text" placeholder='CVV' className='cvv'/>
                              </div>
                        </div>
                        <div className="logo">
                          <div className="logoimg">
                              <img src={logo1} alt="" />
                              <img src={logo2} alt="" />
                          </div>
                          {proceed()}
                        </div>

                    </div>
                </div>
                
            </div>
    </div>
  )
}
