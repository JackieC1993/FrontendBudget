import { Link } from "react-router-dom";

function NavBar() {
    const newTransactions = () => {
        console.log('new transactions')
    }
  return (
        <>
      <header className="header">
        <h1>Budgeting App</h1>
        <h1 className="logo">Logo</h1>
        <button type="button" 
        onClick={newTransactions} >
            <Link to="/transactions/new">Add Transactions</Link>
            </button>
      </header>
        </>
  );
  }

export default NavBar;
