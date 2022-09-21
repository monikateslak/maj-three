import React from 'react'
import MainBox from './MainBox'
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from './Navigation'
import Footer from './Footer'

//const Home = () => <Home></Home>

function MainSection() {
  return (
    <div className="main-section">
      <Navigation></Navigation>
      <MainBox></MainBox>
      <Footer></Footer>
    </div>
  )
}

export default MainSection
