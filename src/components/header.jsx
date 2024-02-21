import React from 'react'
import Navbar from './navbar'
import '../App.css';
import logo from '../logo.png'

export default function Header({bg, headerContent}) {


  return (
    <div>
         <header className={bg}>
      <div className="top-items">
        
          <img className="icon" src={logo} alt="pic" />
        

       <Navbar/>
        <div><button type="submit" className="btn">Sign Up</button></div>
      </div>

      <div className="header-text">
       
       {headerContent}
      </div>
    </header>
    </div>
  )
}
