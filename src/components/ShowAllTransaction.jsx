import React, { useState, useEffect } from "react";
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

  // Use the first transaction as a representative for the link
  const firstTransaction = transactions[0];

  return (
    <>
      {transactions.map((transaction, idx) => (
        <div id={`${index}`} idx={transaction.id} key={idx}>
          <h1>
            <Link to={`/transactions/${idx}`}>{transaction.from}</Link>
          </h1>
          <h1>{transaction.date}</h1>
          <h1>{transaction.amount}</h1>
        </div>
      ))}

      <Link to={`/transactions/${firstTransaction ? 0 : '' +1 }`}>
        Go to First Transaction
      </Link>
    </>
  );
}

export default ShowAllTransactions;

