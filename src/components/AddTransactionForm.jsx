import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTransaction() {
  const [transactions, setTransactions] = useState({
    date: "",
    item_name: "",
    amount: "",
    from: "",
  });

  const navigate = useNavigate();

  const addTrans = async () => {
    try {
      const response = await fetch(`http://localhost:3001/transactions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transactions),
      });

      if (response.ok) {
        // Handle success, if needed
      } else {
        // Handle failure, if needed
      }
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  };

  const handleTextChange = (event) => {
    setTransactions({
      ...transactions,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTrans();
    navigate("/transactions");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Add a Transaction</h1>
        <label>
          <input
            type="text"
            placeholder="Description"
            value={transactions.item_name}
            name="item_name"
            onChange={handleTextChange}
          />
        </label>
        <label>
          <input
            type="number"
            placeholder="Amount"
            value={transactions.amount}
            name="amount"
            onChange={handleTextChange}
          />
        </label>
        <label>
          <input
            type="date"
            placeholder="Date"
            value={transactions.date}
            name="date"
            onChange={handleTextChange}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Category"
            value={transactions.from}
            name="from"
            onChange={handleTextChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddTransaction;
