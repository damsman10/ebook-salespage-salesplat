import React from 'react'
import Hero from '../components/Hero'
import Order from '../components/Order'
import Gettings from '../components/Gettings'
import Stat from '../components/Stat'
import Solution from '../components/Solution'
import Explosive from '../components/Explosive'
import WhyExplosive from '../components/WhyExplosive'
import BumperOffer from '../components/BumperOffer'
import Footer from '../components/Footer'
import Blur from '../components/Blur'
import EbookMobile from '../components/EbookMobile'

const Home = () => {
  return (
    <div>
        <Hero />
        <Order />
        <Gettings />
        <Stat />
        <EbookMobile />
        <Solution />
        <Explosive />
        <Blur />
        <WhyExplosive />
        <BumperOffer />
        <Footer />
    </div>
  )
}

export default Home