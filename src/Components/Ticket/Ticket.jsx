import React, { useContext } from 'react'
import './ticket.css'
import { movieContext } from '../../Context/MovieContext'
import QrCode from '../QRcode/QrCode'



export default function Ticket(props) {
  let {City,SelectCinema,SelectTimeSlot,SelectMovie,mergedSeat,totalCost,SelectDate}=useContext(movieContext)
  let seatdetails=(Object.keys(mergedSeat).filter(seat=>mergedSeat[seat]===1)).map(item=>item).join(',')

  let month=parseInt(SelectDate.substring(5,7),10)
  let year=parseInt(SelectDate.substring(0,4),10)
  const date = new Date(Date.UTC(year, month - 1, 1))
  const monthName = date.toLocaleString('en-US', { month: 'short' })
  
  let date_selected=SelectDate.substring(8,10)+' '+monthName+' '+year
  

  return (
    <div className='ticket'>
          <div className="ticketcontainer">
               <div className="ticket-top">
                  <img src={props.Movie.poster} alt="" />
                  <div className="movie-info">
                      <h3>{SelectMovie} (U/A)</h3>
                      <p>{SelectTimeSlot}/{date_selected}</p>
                      <p>PVR:{SelectCinema},{City}</p>
                  </div>
                  <p className='mticket'>M-Ticket</p>
               </div>
               <div className="partition">----------------------------------------------</div>
               <div className="ticket-centre">
                    <div className="qr">
                      <QrCode value={`${SelectMovie} date:${date_selected} time:${SelectTimeSlot} cinema:${SelectCinema},${City} Seats:${seatdetails}`}/>
                    </div>
                    <div className="centre-right">
                      <p>Seats</p>
                      <div className="seat-list">
                          {Object.keys(mergedSeat).map((seat,i)=>{
                              if(mergedSeat[seat]===1)
                              {
                                return <p key={i}>{seat}</p>
                              }
                          })}
                      </div>
                    </div>
               </div>
               <div className="ticket-bottom">
                    <p>Total Cost: </p>
                    <p>₹{totalCost()}</p>
               </div>
          </div>
    </div>
  )
}
