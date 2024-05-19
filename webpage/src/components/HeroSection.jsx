import React from 'react'
import {interior} from '../assets'

function HeroSection() {
  return (
    <main className="imgNtext">
      <img src={interior} className="img1" />
      <div>
        <h2 className="text1">Get peronalised home interiors</h2>
        <h2 className="bold">in just 50 days</h2>
        <section>
          <button>SPEAK WITH A ONLINE CONSULTANT</button>
        </section>
      </div>
    </main>
  );
}

export default HeroSection