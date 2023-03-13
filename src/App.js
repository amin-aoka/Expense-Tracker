import {React, useState} from 'react';
import './App.css';
import Header from './Components/Header.js';
import Balance from './Components/Balance.js';
import IncomeExpenses from './Components/IncomeExpenses.js';
import Transactions from './Components/Transactions.js';
import {Add} from './Components/Add.js'

function App() {
  const [transactions,setTransactions]=useState([ ])

  const [income, setIncome]=useState(0);
  const [expense,setExpense]=useState(0);

  const addTransaction = (transaction)=>{
    const id= Math.floor(Math.random() *1000) +1;
    const newTransaction = {id, ...transaction};
    setTransactions([...transactions, newTransaction]);
    let num=parseFloat(newTransaction.amount)
    if (num > 0){
      setIncome(income+num)
    }else if(num < 0){
      setExpense(expense+num)
   }
  }

  const onRemove = (id)=>{
   setTransactions( transactions.filter((transaction)=>transaction.id !== id));
   transactions.map((transaction)=>{
    if (transaction.id === id){
        if(transaction.amount >0){
          setIncome(income-transaction.amount)
        }else if (transaction.amount <0){
          setExpense(expense-transaction.amount)
        }
    }
       })
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
