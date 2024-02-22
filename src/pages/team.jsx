import React from 'react'
import picr from '../../src/picr.jpeg'

export default function Team() {
  return (
    <div>
         <section class="team">
        <h2>Our Team</h2>
        <div class="team-section">

            <div class="card">
            <img src={picr} alt="pic"/>
                <h2>Jean Doe</h2>
                <h3>General Manager</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto harum </p>
            </div>

            <div class="card">
                <img src={picr} alt="pic"/>
                <h2>Jean Doe</h2>
                <h3>General Manager</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto harum </p>
            </div>

            <div class="card">
            <img src={picr} alt="pic"/>
                <h2>Jean Doe</h2>
                <h3>General Manager</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto harum </p>
            </div>

            <div class="card">
            <img src={picr} alt="pic"/>
                <h2>Jean Doe</h2>
                <h3>General Manager</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto harum </p>
            </div>

        </div>

    </section>
    </div>
  )
}
