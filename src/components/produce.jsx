import React from 'react'
import { productItems } from '../product'

export default function  Products() {

    const produce = productItems
    
  return (

    <div>
        <div>
            <h2>Our Products</h2>
        </div>

        <section className='products'>
        <div className='product-item' >

        {produce.map((item) => (
           
            <div key={item.id} >

                <div>
                <img src={item.image_url} alt="pic" />
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p>{item.price}</p>
                </div>
               
                 
               
            </div>
        ))}
       </div>
        </section>
    </div>
  )
}
