import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function DeleteTransaction() {
  const { id } = useParams();
  const [transaction, setTransaction] = useState({});
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/transactions/${id}`);
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        const data = await response.json();
        setTransaction(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3001/transactions/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setIsDeleted(true);
      } else {
        console.error("Failed to delete transaction");
      }
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  return (
    <div>
      {isDeleted ? (
        <div>
          <h2>Transaction Deleted Successfully!</h2>
          <Link to="/transactions">Go Back to Transactions</Link>
        </div>
      ) : (
        <div>
          <h2>Are you sure you want to delete this transaction?</h2>
          <p>Date: {transaction.date}</p>
          <p>Amount: {transaction.amount}</p>
          <p>Category: {transaction.from}</p>
          <button onClick={handleDelete}>Delete</button>
          <Link to={`/transactions/${id}`}>Cancel</Link>
        </div>
      )}
    </div>
  );
}

export default DeleteTransaction;
