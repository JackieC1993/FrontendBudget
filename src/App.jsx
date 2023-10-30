import React, { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [transactions, setTransactions] = useState([])
    useEffect(() => {
      const fetchData = async () => {
          try{
              const response=await fetch('http://localhost:3001/transactions/');
              if(!response.ok){
              throw new Error(`Request failed with status: ${response.status}`);
              }
              const data= await response.json();
              setTransactions(data);

              
           }catch(error){
              console.error('Fetch error:',error);
           }
              }
           fetchData()
          }, [])
  return (
    <>
    {transactions.map((transaction) => (
      <div key={transaction.id}>
        <h1>{transaction.id}</h1>
        <h1>{transaction.amount}</h1>
      </div>
    ))}
</>
  )
}

export default App
