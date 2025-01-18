import React from 'react'
import Hero1 from './components/Hero1'
import Hero2 from './components/Hero2'
import Card1 from './components/Card1'
import PopularProduct from './components/PopularProduct'
import Club from './components/Club'
import Studio from './components/Studio'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero1 />
      <Hero2 />
      <Card1 /> 
      <PopularProduct />
      <Club />
      <Studio />
      <Footer />
    </div>
  )
}

export default page