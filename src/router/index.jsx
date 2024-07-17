import React from 'react'
import { BrowserRouter, Router, Route,Link } from 'react-router-dom'
import CreateForm from '../form'
import RoughForm from '../rough/roughForm'

export default function Routeing() {
  return (
    <div>
        <BrowserRouter>
        <nav>
            <Link to ="/form">Form</Link>
            <Link to ="/src/rough/roughForm.jsx">Form</Link>
        </nav>
        <Router>
      <Route path="/src/form/index.jsx" element={<CreateForm/>}></Route>
      <Route path="/src/rough/roughForm.jsx" element={<RoughForm/>}></Route>
        </Router>
        </BrowserRouter>
      
    </div>
  )
}
