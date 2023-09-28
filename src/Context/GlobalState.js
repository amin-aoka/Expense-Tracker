import { createContext } from "react";
import {React, useState} from 'react';

export const GlobalContext = createContext({});
export const GlobalProvider = ({children})=>{

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

  let total =0;
  transactions.map((item)=>total += parseFloat(item.amount) )

    return(
            <GlobalContext.Provider value = {{total,income,expense,transactions,onRemove,addTransaction }}>
                {children}
            </GlobalContext.Provider>
    )
}