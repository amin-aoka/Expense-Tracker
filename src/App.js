import { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header.js';
import Balance from './Components/Balance.js';
import IncomeExpenses from './Components/IncomeExpenses.js';
import Transactions from './Components/Transactions.js';
import {Add} from './Components/Add.js'

function App() {
  const [transactions,setTransactions]=useState([
    { 
      id:0,
      text:"salary",
      amount: 540
    },
    { 
      id:1,
      text:"Buy Book",
      amount: 20
    },
    { 
      id:3,
      text:"Buy bicycle",
      amount: 200
    }
  ])

  const [income, setIncome]=useState([0]);
  const [expense,setExpense]=useState([0]);

  const addTransaction = (transaction)=>{
    const id= Math.floor(Math.random() *1000) +1;
    const newTransaction = {id, ...transaction};
    setTransactions([...transactions, newTransaction]) ;
   }


  const onRemove = (id)=>{
   setTransactions( transactions.filter((transaction)=>transaction.id !== id))
  }

  let amount =0;
   transactions.map((item)=>amount += parseFloat(item.amount) )

  return (
    <div className="container">
      <Header/>
      <Balance balance={amount}/>
      <IncomeExpenses income ={income} expense={expense}/>
      <Transactions transactions={transactions} onClick ={onRemove}/>
      <Add onAdd = {addTransaction}/>
    </div>
  );
}



export default App;
