import React from 'react'

import Products from '../components/produce'
import Header from '../components/header';

export default function Produce() {

  const headerContent = (
    <React.Fragment>
      <h1>
        Serving You Fresh <span className="span">Organic Food</span> All the time
      </h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
        atque suscipit laudantium .
      </p>
     
    </React.Fragment>
  );
  return (
    <div>
      <Header bg="bg-produce" headerContent={headerContent} />
       

        <Products/>
        </div>
  )
}
