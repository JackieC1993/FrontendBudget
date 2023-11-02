import React, { useState,useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ShowAllTransactions from './components/ShowAllTransaction'
import './App.css'
import NavBar from './components/NavBar'
import AddInfo from './pages/AddInfo'
import AddTransactionForm from './components/AddTransactionForm'
function App() {
return(
  <>
  <Router>
    <NavBar />
    <Routes>
      <Route path="/transactions" element={<ShowAllTransactions />} />
      <Route path="/components" element={<AddTransactionForm/>} />
    </Routes>
  </Router>
  </>
)
}

export default App
