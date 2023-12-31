import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function TransactionCard() {
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

  const handleUpdate = async (transactionId) => {
    try {
      // Make a PUT request to update the individual transaction
      const response = await fetch(`http://localhost:3001/transactions/${index}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
       
        body: JSON.stringify({ /* Updated transaction data */ }),
      });

      if (!response.ok) {
        throw new Error(`Update request failed with status: ${response.status}`);
      }

      // Navigate to the transactions page after a successful update
      window.location.href = '/transactions';
    } catch (error) {
      console.error("Error updating transaction:", error);
    }
  };

  return (
    <>
      <button id="backButton2">
        <Link to="/transactions">🔙 All Transactions</Link>
      </button>

      {transactions.map((item) => {
        if (item) {
          return (
            <div className="single" key={index} id={index}>
              <div id="single-date">
                <strong>{`${item.date}`}&nbsp;&nbsp;</strong>
              </div>
              <div id="single-company">
                <strong> {`${item.item_name}`}</strong>&nbsp;&nbsp;-&nbsp;
                {item.from}
              </div>
              <div id="single-amount"> {`${item.amount}`}</div>
              <button onClick={() => handleUpdate(item.id)}>Update</button>
            </div>
          );
        }
      })}
    </>
  );
}

export default TransactionCard;

