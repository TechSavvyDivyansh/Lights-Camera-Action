import {React,useContext,useState} from 'react'
import './Navbar.css'

import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { movieContext } from '../../Context/MovieContext'

export default function Navbar() {

  const [Nav, setNav] = useState("MovieMania")
  const {Mode,modeSwitch}=useContext(movieContext)

  return (
    <div className='nav'>
        <div className="nav-container">
            <img src={logo} alt="" />
            <ul className="nav-menu">
                <li onClick={()=>{setNav("MovieMania")}}><Link to='/' className={Mode?"links dark":"links light"}>Movie Mania{Nav==="MovieMania"?<hr/>:""}</Link></li>
                <li onClick={()=>{setNav("TopPics")}}><Link to='/TopPics' className={Mode?"links dark":"links light"}>Top Picks{Nav==="TopPics"?<hr/>:""}</Link></li>
                <li onClick={()=>{setNav("Gallery")}}><Link to='/Gallery' className={Mode?"links dark":"links light"}>Gallery{Nav==="Gallery"?<hr/>:""}</Link></li>
                <li onClick={()=>{setNav("Signup")}}><Link to='/Signup' className={Mode?"links dark":"links light"}>Signup{Nav==="Signup"?<hr/>:""}</Link></li>
            </ul>
            <div className="toggle" onClick={modeSwitch}>
                {Mode?<i className='bx bxs-moon m'/>:<i className='bx bxs-sun s'/>}
            </div>
        </div>
    </div>
  )
}
