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

  const [income, setIncome]=useState(0);
  const [expense,setExpense]=useState(0);

  const addTransaction = (transaction)=>{
    const id= Math.floor(Math.random() *1000) +1;
    const newTransaction = {id, ...transaction};
    setTransactions([...transactions, newTransaction]);
    const updated = [[...transactions, newTransaction]]
    console.log(updated)

if(newTransaction.amount > 0){ 
     let resultI= updated.reduce(function (totalIncome, obj) { return totalIncome + obj.amount,      console.log(totalIncome)
     }, 0);
     setIncome(resultI)
  } else if(newTransaction.amount < 0) {
    let resultE = updated.reduce(function (totalExpense, obj) { return totalExpense + obj.amount}, 0);
    console.log(resultE)
    setExpense(resultE)
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
