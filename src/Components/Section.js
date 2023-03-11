import React from 'react'
import "../styles/home.css"
import cover from "../images/image-web-3-desktop.jpg"

export default function Section() {
  return (
    <section className='main'>
      <div className='main__cover'>
        <img src={cover}></img>
      </div>
      <div className='main__title'>
        <h1>The Bright Future of Web 3.0?</h1>
      </div>
      <div className='main__text'>
        <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands od the people. But is it really fulfilling its promise?</p>
        <button>READ MORE</button>
      </div>
      <div className='main__sidenav'>
        <h2>New</h2>
        <h3>Hydrogen VS Electric Cars</h3>
        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        <div className='bar'></div>
        <h3>The Downsides of AI Artistry</h3>
        <p>What are the possible adverse effects of on-demand AI image generation?</p>
        <div className='bar'></div>
        <h3>Is VC Funding Drying Up?</h3>
        <p>Private funding by VC firms is down 50% YOY. We take a look at what means.</p>
      </div>
    </section>
  )
}
