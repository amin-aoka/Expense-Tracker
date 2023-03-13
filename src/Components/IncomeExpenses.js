const IncomeExpenses = ({income,expense}) => {
    return(
        <div className="income-expense">
            <div className= "income">
                <h3>INCOME</h3>
                <p style= {{fontSize:"1.5rem"}}>${income.toFixed(2)}</p>
            </div>
            <span className = "Mborder"></span>
            <div className= "expense">
                <h3>EXPENSE</h3>
                <p style= {{fontSize:"1.5rem"}}>${expense.toFixed(2)}</p>
            </div>
        </div>
    )
}
export  default IncomeExpenses;