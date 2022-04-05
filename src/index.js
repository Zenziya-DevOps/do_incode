import React from "react"
import ReactDOM from "react-dom/client"
import Vw_Privacidad from "./layout/Onbording"
import { BrowserRouter as Router } from "react-router-dom"
import { Routes, Route } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("z"))
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Vw_Privacidad />} />
    </Routes>
  </Router>
)
