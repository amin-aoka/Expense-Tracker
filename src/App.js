import { useState } from 'react';
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
      amount: 540.00
    },
    { 
      id:1,
      text:"Buy Book",
      amount: 20.00
    },
    { 
      id:3,
      text:"Buy bicycle",
      amount: 200.00
    }
  ])

  const [income, setIncome]=useState(0.00);
  const [expense,setExpense]=useState(0.00);

  const addTransaction = (transaction)=>{
    const id= Math.floor(Math.random() *1000) +1;
    const newTransaction = {id, ...transaction};
    setTransactions([...transactions, newTransaction]);
    let totalIncome=0;
    let totalExpense =0;
    if(newTransaction.amount < 0) {
      setExpense( transactions.forEach(transaction=>{totalExpense+=transaction.amount}))
  } else if(newTransaction.amount > 0){ 
      setIncome( transactions.forEach(transaction=>{totalIncome+=transaction.amount}))
  }

  const onRemove = (id)=>{
   setTransactions( transactions.filter((transaction)=>transaction.id !== id))
  }

  return (
    <div className="container">
      <Header/>
      <Balance/>
      <IncomeExpenses income ={income} expense={expense}/>
      <Transactions transactions={transactions} onClick ={onRemove}/>
      <Add onAdd = {addTransaction}/>
    </div>
  );



}

}

export default App;
