import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function CreateTransaction() {
  const [formData, setFormData] = useState({
    date: "",
    amount: "",
    from: "",
  });

  const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCreate = async () => {
    try {
      const response = await fetch("http://localhost:3001/transactions/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Redirect to the transactions page or the newly created transaction
        history.push("/transactions");
      } else {
        console.error("Failed to create transaction");
      }
    } catch (error) {
      console.error("Create error:", error);
    }
  };

  return (
    <div>
      <h2>Create Transaction</h2>
      <form>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date || ""}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            name="amount"
            value={formData.amount || ""}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="from"
            value={formData.from || ""}
            onChange={handleInputChange}
          />
        </label>
        <button type="button" onClick={handleCreate}>
          Create
        </button>
        <Link to="/transactions">Cancel</Link>
      </form>
    </div>
  );
}

export default CreateTransaction;
