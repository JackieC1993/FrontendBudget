import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTransaction() {
    const { transactions, setTransactions } = useState({
        date: "",
        item_name: "",
        amount: "",
        from: "",
    });
    let navigate = useNavigate();
    const addTrans = async () => {
    try {
     await fetch(`http://localhost:3001/transactions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transactions),
      })
        .then((res) => res.json())
    } catch (error) {
      return error;
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
    navigate("/transactions")
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Add a Transaction</h1>
        <label>
          <input type="text" placeholder="Description" />
        </label>
        <label>
          <input
            type="number"
            placeholder="Amount"
            value={transactions.amount}
            name="amount"
          />
        </label>
        <label>
          <input type="date" placeholder="Date" onChange={handleTextChange} 
          name="date"/>
        </label>
        <label>
          <input type="text" placeholder="Category" onChange={handleSubmit}
          name="from" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default AddTransaction;
// import React, { useState } from "react";

// function AddTransaction() {
//   const [transactions, setTransactions] = useState({
//     date: "",
//     item_name: "",
//     amount: "",
//     from: "",
//   });

//   const addTrans = async () => {
//     try {
//       await fetch("http://localhost:3001/transactions", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(transactions),
//       })
//         .then((res) => res.json())
//         .then(() => {
//           // Handle success here, e.g., redirect or show a success message
//           // navigate("/transactions");
//         });
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   const handleTextChange = (event) => {
//     setTransactions({
//       ...transactions,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     addTrans();
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <h1>Add a Transaction</h1>
//         <label>
//           Description: <input type="text" name="item_name" onChange={handleTextChange} />
//         </label>
//         <label>
//           Amount: <input type="number" name="amount" value={transactions.amount} onChange={handleTextChange} />
//         </label>
//         <label>
//           Date: <input type="date" name="date" onChange={handleTextChange} />
//         </label>
//         <label>
//           Category: <input type="text" name="from" onChange={handleTextChange} />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default AddTransaction;
