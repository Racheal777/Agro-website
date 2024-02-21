import React from 'react'
import Header from '../components/header'
import About from './about'
import ProduceSection from './produce-section'

export default function Home() {
  return (
    <div>
        <Header/>
        <About/>
        <ProduceSection/>
    </div>
  )
}
