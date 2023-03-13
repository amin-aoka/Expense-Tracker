import { useState} from "react"

export function Add ({onAdd}){

    const [text,setText]= useState("");
    const [amount,setAmount]=useState();
    const onSubmit = (e)=>{
        e.preventDefault(); 
        onAdd({text,amount});
        setText("")     
        setAmount();
    }
    return(
        <div>
            <h3>Add new transaction</h3>
            <form className="addForm" onSubmit={onSubmit}>
                <label>Text</label>
                <input className="myinput" type = "text" placeholder="Enter Your text..."
                 onChange = {e=> {setText (e.target.value)}}></input>
                
                <label>Amount</label>
                <input className="myinput" type = "number" 
                onChange= {(e)=>{setAmount(e.target.value)}}></input>
                 <input className="mysubmit" type="submit" value="Add Transaction" ></input>

            </form>
           
        </div>
    )
}

