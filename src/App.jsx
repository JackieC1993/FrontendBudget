import React, { useState,useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ShowAllTransactions from './components/ShowAllTransaction'
import './App.css'
import NavBar from './components/NavBar'
import AddTransactionForm from './components/AddTransactionForm'
import TransactionCard from './components/TransactionCard'
import LoginForms from './components/LoginForm'


function App() {
return(
  <>
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<LoginForms />} />
      <Route path="/transactions/:index" element={<TransactionCard />} />
      <Route path="/transactions" element={<ShowAllTransactions />} />
      <Route path="/transactions/new" element={<AddTransactionForm/>} />
    </Routes>
  </Router>
  </>
)
}

export default App
