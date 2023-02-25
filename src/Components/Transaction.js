function Transaction ({transaction}){
    return(
        <div className="transaction">
            <span>{transaction.text}</span>
            <span>{transaction.amount}</span>
        </div>
    )
}
export default Transaction