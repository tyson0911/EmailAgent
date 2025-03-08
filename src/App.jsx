// import { useState } from 'react'

// import './App.css'
import EmailAgentLanding from './components/EmailAgentLanding'
import Waitlist from './components/Waitlist'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import "EmailAgentLanding.css"


function App() {
 

  return (
    <>
    <Router>
      <Routes>
        <Route path="/waitlist" element={<Waitlist />} />
        <Route path="/" element={<EmailAgentLanding />} />
      </Routes>
      
    </Router>
      
   </>
  )
}

export default App
