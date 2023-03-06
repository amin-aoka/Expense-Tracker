const IncomeExpenses = ({income,expense}) => {
    let myIncome=`$ ${income}.00`;
    let myExpense=`$ ${expense}.00`
    return(
        <div className="income-expense">
            <div className= "income">
                <h3>INCOME</h3>
                <p style= {{fontSize:"1.5rem"}}> {myIncome}</p>
            </div>
            <span className = "Mborder"></span>
            <div className= "expense">
                <h3>EXPENSE</h3>
                <p style= {{fontSize:"1.5rem"}}>{myExpense}</p>
            </div>
        </div>
    )
}

export  default IncomeExpenses;