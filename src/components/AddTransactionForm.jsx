import { Form } from "react-router-dom";

function AddTransaction() {
    return (

        <div>
            <form>
                <h1>Add a Transaction</h1>
                <label>
                    <input type="text" placeholder="Description" />
                </label>
                <label>
                    <input type="number" placeholder="Amount" />
                </label>
                <label>
                    <input type="date" placeholder="Date" />
                </label>
                <label>
                    <input type="text" placeholder="Category" />
                </label>
                <button type="submit">Submit</button>
            </form>
        This is the addTransaction form.
        </div>
            )
    }
            export default AddTransaction;