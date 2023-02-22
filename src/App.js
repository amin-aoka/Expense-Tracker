import { useState } from 'react';
import './App.css';
import Header from './Components/Header.js';
import Balance from './Components/Balance.js';
import IncomeExpenses from './Components/IncomeExpenses.js';
import Transactions from './Components/Transactions.js';
import {Add} from './Components/Add.js'
import { useState } from 'react';

function App() {
  const [transactions,setTransactions]=useState([
    { 
      id:0,
      text:"salary",
      amount: "+$540.00" 
    },
    { 
      id:1,
      text:"Buy Book",
      amount: "-$20.00" 
    }

  ])

  const addTransaction = (e)=>{
    e.preventDefault(); 
    alert("submit clicked")
  }
  return (
    <div className="container">
      <Header/>
      <Balance/>
      <IncomeExpenses/>
      <Transactions transactions={transactions}/>
      <Add onSubmit = {addTransaction}/>
    </div>
  );
}

export default App;
