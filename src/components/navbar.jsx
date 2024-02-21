import React from 'react'
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
         <nav className="navbar">
          <ul>
            <li>
             <Link to="/">Home</Link>
            </li>

            <li>
            <Link to="/about">About</Link>
            </li>

            <li>
            <Link to="/produce">Produce</Link>
            </li>

           

            <li>
            <Link to="/Gallery">Gallery</Link>
            </li>

           

            <li>
            <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <Outlet/>
        </nav>

    </div>
  )
}
