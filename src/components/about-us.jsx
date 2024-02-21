import React from 'react'
import logo from '../logo.png'

export default function AboutUs() {
  return (
    <div>
        <section class="about-section">
      <div class="about-text">
      <div>
          <img className="icons" src={logo} alt="pic" />
         </div>
        <h3>About Us</h3>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, saepe
          recusandae in provident expedita nostrum sit dolor cupiditate officia,
          pariatur consequuntur ipsum. Mollitia, recusandae voluptatum nisi quos
          dicta blanditiis omnis!
        </p>
      </div>
    </section>
    </div>
  )
}
