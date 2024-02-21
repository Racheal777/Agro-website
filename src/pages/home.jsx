import React from 'react'
import Header from '../components/header'

import ProduceSection from './produce-section'
import Footer from '../components/footer';
import AboutUs from '../components/about-us';

export default function Home() {
    const headerContents = (
        <React.Fragment>
          <h1>
            No.1 Producer of <span className="span">Organic Food</span>
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
            atque suscipit laudantium .
          </p>
          <div><button type="submit" className="btn">Start Here</button></div>
        </React.Fragment>
      );
  return (
    <div>
        <Header bg="bg" headerContent={headerContents}/>
        <AboutUs/>
        <ProduceSection/>
        <Footer/>
    </div>
  )
}
