const IncomeExpenses = () => {
    return(
        <div className="income-expense">
            <div className= "income">
                <h3>INCOME</h3>
                <p style= {{fontSize:"1.5rem"}}> $0.00</p>
            </div>
            <span className = "Mborder"></span>
            <div className= "expense">
                <h3>EXPENSE</h3>
                <p style= {{fontSize:"1.5rem"}} > $0.00</p>
            </div>
        </div>
    )
}

export  default IncomeExpenses;