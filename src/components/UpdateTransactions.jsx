import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function UpdateTransaction() {
  const { id } = useParams();
  const [transaction, setTransaction] = useState({});
  const [formData, setFormData] = useState({});
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/transactions/${id}`);
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        const data = await response.json();
        setTransaction(data);
        setFormData(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:3001/transactions/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsUpdated(true);
      } else {
        console.error("Failed to update transaction");
      }
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  return (
    <div>
      {isUpdated ? (
        <div>
          <h2>Transaction Updated Successfully!</h2>
          <Link to={`/transactions/${id}`}>Go Back to Transaction Details</Link>
        </div>
      ) : (
        <div>
          <h2>Update Transaction</h2>
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
            <button type="button" onClick={handleUpdate}>
              Update
            </button>
            <Link to={`/transactions/${id}`}>Cancel</Link>
          </form>
        </div>
      )}
    </div>
  );
}

export default UpdateTransaction;
