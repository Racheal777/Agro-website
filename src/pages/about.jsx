import React from 'react'
import Header from '../components/header'
import AboutUs from '../components/about-us'
import Footer from '../components/footer';


export default function About() {
    const headerContents = (
        <React.Fragment>
          <h1>
            Eat Healthy with <span className="span">Organic Food</span>
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
            atque suscipit laudantium .
          </p>
         
        </React.Fragment>
      );
  return (
    <div>

<Header bg="bg" headerContent={headerContents}/>
    <AboutUs/>

    <Footer/>
    </div>
  )
}
