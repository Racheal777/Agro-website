import React from 'react'
import Navbar from './navbar'
import '../App.css';

export default function Header() {
  return (
    <div>
         <header className="bg">
      <div className="top-items">
        <div><h2 className="icon">theLoveShop</h2></div>

       <Navbar/>
        <div><button type="submit" className="btn">Sign Up</button></div>
      </div>

      <div className="header-text">
        <h1>
          Start your Valantine with .... <span className="span">theLoveShop</span>
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          atque suscipit laudantium .
        </p>
      </div>
    </header>
    </div>
  )
}
