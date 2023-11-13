import React, { useState, useEffect } from "react";
import "../App";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function ShowAllTransactions() {
  const { index } = useParams();
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/transactions/");
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {transactions.map((transaction) => (
        <div id="transaction" key={transaction.id}>
          <h1>
            <Link to={`/transactions/${transaction.id}`}>{transaction.from}</Link>
          </h1>
          <h1>{transaction.date}</h1>
          <h1>{transaction.amount}</h1>
        </div>
      ))}
    </>
  );
}

export default ShowAllTransactions;
