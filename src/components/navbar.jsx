import React from 'react'

export default function Navbar() {
  return (
    <div>
         <nav className="navbar">
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>

            <li>
              <a href="/about">About</a>
            </li>

            <li>
              <a href="/gallery">Gallery</a>
            </li>

            <li>
              <a href="/store">Store</a>
            </li>

           

            <li>
              <a href="/contact">Contacts</a>
            </li>
          </ul>
        </nav>

    </div>
  )
}
