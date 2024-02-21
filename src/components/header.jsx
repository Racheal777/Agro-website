import React from 'react'
import Navbar from './navbar'
import '../App.css';

export default function Header() {
  return (
    <div>
         <header className="bg">
      <div className="top-items">
        <div><h2 className="icon">theAgroShop</h2></div>

       <Navbar/>
        <div><button type="submit" className="btn">Sign Up</button></div>
      </div>

      <div className="header-text">
       
        <h1>
          We provide you with the best <span className="span">Organic Food </span>
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          atque suscipit laudantium .
        </p>
        <div><button type="submit" className="btn">Start Here</button></div>
      </div>
    </header>
    </div>
  )
}
