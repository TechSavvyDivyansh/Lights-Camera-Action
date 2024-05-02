import React, { useContext } from 'react'
import './bookingpop.css'
import CityList from '../cityList/CityList'
import CinemaSelect from '../cinemaSelect/CinemaSelect'
import TimeSelect from '../TimeSelect/TimeSelect'
import SeatSelect from '../SeatSelect/SeatSelect'
import Payement from '../Payement/Payement'
import Ticket from '../Ticket/Ticket'
import { movieContext } from '../../Context/MovieContext'

export default function BookingPop(props) {
    let {Popupselect,popClosefn}=useContext(movieContext)


    let pop=()=>{
        let poppage=""
        if(Popupselect===0)
        {
            poppage=<CityList/>
        }
        else if(Popupselect===1)
        {
            poppage=<CinemaSelect/>
        }
        else if(Popupselect===2)
        {
            poppage=<TimeSelect Movie={props.Movie}/>
        }
        else if(Popupselect===3)
        {
            poppage=<SeatSelect/>
        }
        else if(Popupselect===4)
        {
            poppage=<Payement/>
        }
        else
        {
            poppage=<Ticket Movie={props.Movie}/>
        }
        return poppage
    }


  return (
    <div className="popupcover">
        <div className="popup">
            <div className="topbar">
                <p></p>
                <i className='bx bxl-xing' onClick={()=>{popClosefn()}}/>
            </div>
            <div className="content">
                {pop()}
            </div>
            <div className="bottombar">
                <ul>
                    <li className={Popupselect===0?"red":"white"}></li>
                    <li className={Popupselect===1?"red":"white"}></li>
                    <li className={Popupselect===2?"red":"white"}></li>
                    <li className={Popupselect===3?"red":"white"}></li>
                    <li className={Popupselect===4?"red":"white"}></li>
                    <li className={Popupselect===5?"red":"white"}></li>
                </ul>
            </div>
                
        </div>
    </div>
  )
}
