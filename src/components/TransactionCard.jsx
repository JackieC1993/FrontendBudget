import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

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
  return (
    <>
      <>
        <button id="backButton2">
          <Link to="/transactions">🔙 All Transactions</Link>
        </button>

        {transactions.map((item, specificIndx) => {
          if (index == specificIndx) {
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
              </div>
            );
          }
        })}

        <div></div>
      </>
    </>
  );
}

export default TransactionCard;
