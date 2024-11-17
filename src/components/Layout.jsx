import React from 'react'
import Nav from './Nav'
import Home from './Home'
import About from './About'
import Overview from './Overview'
import Portfolio from './Portfolio'
import Form from './Form'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className='Layout_container'>
        <Nav/>
        <br/>
        <Home/>
        <About/>
        <Overview/>
        <Portfolio/>
        <Form/>
        <Footer/>
    </div>
  )
}

export default Layout