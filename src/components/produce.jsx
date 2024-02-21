import React from 'react'
import { productItems } from './product'


export default function  Products() {

    const produce = productItems

  return (

    <div>
        <section className='produce'>
        <div>
            <h2>Our Products</h2>
        </div>

        <div>
          <ul>
            <li>
              <a href="/"> Vegetables</a>
            </li>

            <li>
              <a href="/"> Fruits</a>
            </li>

            <li>
              <a href="/"> Dairy</a>
            </li>

            <li>
              <a href="/"> Legumes</a>
            </li>
          </ul>
        </div>
        <div className='product-item' >

        {produce.map((item) => (
           
            <div key={item.id} >

                <div className='card'>
                <img src={item.image_url} alt="pic" />
                
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                  <p>GHC {item.price}</p>
                  <div><button type="submit" className="btn">Add to Cart</button></div>
                </div>
               
                 
               
            </div>
        ))}
       </div>
        </section>
    </div>
  )
}
