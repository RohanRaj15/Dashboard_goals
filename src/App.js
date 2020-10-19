import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/sideNavbar'
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <nav className="navbar-expand-md navbar-dark bg-primary">
            <div className="row">
              <div className="col-md-2" style={{backgroundColor:"whitesmoke"}}>

              </div>
              <div className="col-md-10">
                <div className="navbar-header">
                  <div className="navbar-brand" style={{marginLeft:"60px"}}>Vanguard&nbsp;&nbsp;|&nbsp;&nbsp;<span style={{fontSize:"15px"}}>Participant</span></div>
                </div>
              </div>
            </div>
          </nav>
          <Navbar/>
        </Router>
      </div>
    )
  }
}

export default App