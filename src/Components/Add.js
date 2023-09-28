import { useState} from "react"
import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
export function Add (){

    
    const {addTransaction} =useContext(GlobalContext)
    const [text,setText]= useState("");
    const [amount,setAmount]=useState();
    const onSubmit = (e)=>{
        e.preventDefault(); 
        addTransaction({text,amount});
        setText("")     
        setAmount();
    }
    return(
        <div>
            <h3>Add new transaction</h3>
            <div className="grayLine"></div>
            <form className="addForm" onSubmit={onSubmit}>
                <label>Text</label>
                <input className="myinput" type = "text" required placeholder="Enter Your text..."
                 onChange = {e=> {setText (e.target.value)}}></input>
                
                <label> Amount </label>
               <label>(negative-expense, positive-income)</label>
                <input className="myinput" type = "number" required placeholder="Enter amount of money"
                onChange= {(e)=>{setAmount(e.target.value)}}></input>
                 <input className="mysubmit" type="submit" value="Add Transaction" ></input>
            </form>
           
        </div>
    )
}

