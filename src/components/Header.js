import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.png'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img class='logo'src={avatar} alt="" />
      </a>
      <h1>
        <strong>The Pixelite</strong>, a photography page.
        <br />
       
        There is a lot of beauty in ordinary things.
        <br />
        
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
