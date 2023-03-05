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
      amount: "+$540.00" 
    },
    { 
      id:1,
      text:"Buy Book",
      amount: "-$20.00" 
    },
    { 
      id:3,
      text:"Buy bicycle",
      amount: "-$200.00" 
    }


  ])

  const addTransaction = (transaction)=>{
    const id= Math.floor(Math.random() *1000) +1;
    const newTransaction = {id, ...transaction};
    setTransactions([...transactions, newTransaction]);
  }

  const onRemove = (id)=>{
    console.log("REMOVED")
   setTransactions( transactions.filter((transaction)=>transaction.id !== id))
  }

  return (
    <div className="container">
      <Header/>
      <Balance/>
      <IncomeExpenses/>
      <Transactions transactions={transactions} onClick ={onRemove}/>
      <Add onAdd = {addTransaction}/>
    </div>
  );



}



export default App;

