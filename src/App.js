import { useState } from 'react';
import './App.css';
import Header from './Components/Header.js';
import Balance from './Components/Balance.js';
import IncomeExpenses from './Components/IncomeExpenses.js';
import Transactions from './Components/Transactions.js';
import {Add} from './Components/Add.js'

function App() {

  const [transactions,setTransactions]=useState([

  ])

  const [income, setIncome]=useState(0);
  const [expense,setExpense]=useState(0);

  const addTransaction = (transaction)=>{
    const id= Math.floor(Math.random() *1000) +1;
    const newTransaction = {id, ...transaction};
    setTransactions([...transactions, newTransaction]);
    console.log(newTransaction)
    let totalIncome=0;
    let totalExpense =0;
    if(newTransaction.amount < 0) {
      transactions.forEach(transaction=>{totalExpense+=transaction.amount})
    setExpense(totalExpense)
  }else if(newTransaction.amount > 0){ 
    transactions.forEach(transaction=>{totalIncome+=transaction.amount})
    setIncome(totalIncome)
  }
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

export default App;
