import './App.css';
import Header from './Components/Header.js';
import Balance from './Components/Balance.js';
import IncomeExpenses from './Components/IncomeExpenses.js';
import Transactions from './Components/Transactions.js';
import {Add} from './Components/Add.js'

function App() {
  const addTransaction = ()=>{
    e.preventDefault(); 
    console.log("submit clicked")
  }
  return (
    <div className="container">
      <Header/>
      <Balance/>
      <IncomeExpenses/>
      <Transactions/>
      <Add onSubmit = {addTransaction}/>
    </div>
  );
}

export default App;
