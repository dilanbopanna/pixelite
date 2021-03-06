import React from 'react'
import '../assets/scss/main.scss'

import Header from './Header'

const Template = ({ children }) => (
  <div class='layout'>
    <Header />
    {children}
  </div>
)

export default Template
