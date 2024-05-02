import {React,createContext, useState} from 'react'
import all_Movies from '../Components/assets/movies'
import cinemas from '../Components/assets/cinemas'


export const movieContext=createContext(null)


const MovieContextProvider=(props)=>{

    // dark light mode
    let [Mode,SetMode]=useState(true)

   


    // to switch popup
    let [Popupselect,setPopupselect]=useState(0)

    // to close and open pop up
    let [ClosePop,SetClosePop]=useState(true)


    let popClosefn=()=>{
        SetClosePop(!ClosePop)
    }    

    
    let modeSwitch=()=>{
        SetMode(!Mode)
    }


     // to select city 
     let [City,SetCity]=useState(cinemas[0].city)

     // to select cinema 
     let [SelectCinema,SetSelectCinema]=useState(cinemas[0].cin[0])
 
     // to select cinema 
     let [SelectTimeSlot,SetSelectTimeSlot]=useState("8 a.m.")
     let [SelectDate,SetSelectDate]=useState((new Date()).toISOString().split('T')[0])


    // Movie Select
    let [SelectMovie,SetSelectMovie]=useState("")



    // Select seats
    let RS={}
    let Reclinerseats=()=>{
        for(let i=1;i<=60;i++)
        {
            RS[i]=0
        } 
        return RS
    }
    let [SelectRecliner,SetSelectRecliner]=useState(Reclinerseats())



    let PS={}
    let primeSeats=()=>{
        for(let i=61;i<=360;i++)
        {
            PS[i]=0
        } 
        return PS
    }
    let [SelectPrime,SetSelectPrime]=useState(primeSeats())



    let LS={}
    let loungeseats=()=>{
        for(let i=361;i<=420;i++)
        {
            LS[i]=0
        }
        return LS
    } 
    let [SelectLounge,SetSelectLounge]=useState(loungeseats())




    let bookRecliner=(seatId)=>{
         SetSelectRecliner((prev)=>{
            if(prev[seatId]===0)
            {
                return ({...prev,[seatId]:1})
            }
            else
            {
                return ({...prev,[seatId]:0})
            }
         })
    }

    let bookPrime=(seatId)=>{
         SetSelectPrime((prev)=>{
            if(prev[seatId]===0)
            {
                return ({...prev,[seatId]:1})
            }
            else
            {
                return ({...prev,[seatId]:0})
            }
         })
    }

    let bookLounge=(seatId)=>{
         SetSelectLounge((prev)=>{
            if(prev[seatId]==0)
            {
                return ({...prev,[seatId]:1})
            }
            else
            {
                return ({...prev,[seatId]:0})
            }
         })
    }

    let mergedSeat={...SelectRecliner,...SelectPrime,...SelectLounge}

    let totalCost=()=>{
        let totalAmt=0
        for (const SeatItem in mergedSeat) {
            if(mergedSeat[SeatItem]>0 && SeatItem<=60)
            {
                totalAmt+=400
            }
            else if(mergedSeat[SeatItem]>0 && SeatItem>=61 && SeatItem<=360)
            {
                totalAmt+=350
            }
            else if(mergedSeat[SeatItem]>0 && SeatItem>=361 && SeatItem<=420)
            {
                totalAmt+=200
            }
            else{}
        }
        return totalAmt
    }

    let resetseats=()=>{
        for (const key in mergedSeat) {
            if (mergedSeat[key]===1 && key<=60) {
                  SetSelectRecliner((prev)=>({...prev,[key]:0}))              
            }
            else if(mergedSeat[key]===1 && key>=61 && key<=360)
            {
                SetSelectPrime((prev)=>({...prev,[key]:0}))
            }
            else if(mergedSeat[key]===1 && key>=361 && key<=420)
            {
                SetSelectLounge((prev)=>({...prev,[key]:0}))
            }
        }
    }


    
    const contextVal={all_Movies,modeSwitch,Mode,cinemas,City,SetCity,Popupselect,setPopupselect,popClosefn,SetClosePop,ClosePop,SelectCinema,SetSelectCinema,SelectTimeSlot,SetSelectTimeSlot,SelectMovie,SetSelectMovie,bookRecliner,bookPrime,bookLounge,SelectRecliner,SelectPrime,SelectLounge,mergedSeat,totalCost,resetseats,SelectDate,SetSelectDate}




    return(
        <movieContext.Provider value={contextVal}>
            {props.children}
        </movieContext.Provider>
    )
}

export default MovieContextProvider