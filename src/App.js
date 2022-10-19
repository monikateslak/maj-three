import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainSection from './components/MainSection'
import logo from './logo.svg'
import './App.css'

const Home = () => <Home></Home>
const Navigation = () => <Navigation></Navigation>
const Footer = () => <Footer></Footer>

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <MainSection></MainSection>
          <Routes>
            <Route path={'/'} component={Home} />
            <Route path={'/nav'} component={Navigation}></Route>
            <Route path={'/footer'} component={Footer}></Route>
          </Routes>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Router>
  )
}

export default App
