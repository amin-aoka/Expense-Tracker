export function Add ({onSubmit}){
    return(
        <div>
            <h3>Add new transaction</h3>
            <form className="addForm" onSubmit={onSubmit}>
                <label>Text</label>
                <input className="myinput" type = "text" placeholder="Enter Your text..."></input>
                
                <label>Amount</label>
                <input className="myinput" type = "number" ></input>

                <input className="mysubmit" type="submit" value="Add Transaction" ></input>

            </form>
           
        </div>
    )
}

