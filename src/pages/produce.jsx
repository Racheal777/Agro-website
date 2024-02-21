import React from 'react'
import Navbar from '../components/navbar'
import Products from '../components/produce'

export default function Produce() {
  return (
    <div>
        <header className="bg-produce">
            <Navbar/>
        </header>

        <Products/>
        </div>
  )
}
