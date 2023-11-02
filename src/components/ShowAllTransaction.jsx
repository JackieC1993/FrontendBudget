import React, { useState,useEffect } from 'react'
import  '../App'

function ShowAllTransactions() {
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
      <div id='transaction' key={transaction.id}>
        <h1>{transaction.from}</h1>
        <h1>{transaction.date}</h1>
        <h1>{transaction.amount}</h1>
      </div>
    ))}
</>
  )
}

export default ShowAllTransactions;