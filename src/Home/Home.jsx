import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from './Banner'
import CollapseSection from './CollapseSection'
import Descriptions from './Descriptions'

function Home() {
  return (
    <div>
        <div>
        <Navbar />
        <Banner />
        </div>
       
        <Descriptions />
        <CollapseSection />
    </div>
  )
}

export default Home