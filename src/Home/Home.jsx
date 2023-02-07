import React from 'react'
import PlansNotify from '../Components/PlansNotify'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Banner from './Banner'
import CollapseSection from './CollapseSection'
import Descriptions from './Descriptions'


function Home() {
  return (
    <div>
        <PlansNotify />
        <Navbar />
        <Banner />
        <Descriptions />
        <CollapseSection />
        
        <Footer />
    </div>
  )
}

export default Home