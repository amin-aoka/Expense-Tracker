function Transaction (transaction){
    return(
        <div className="transaction">
            <span>{text = transaction.text}</span>
            <span>{amount = transaction.amount}</span>
        </div>
    )
}
export default Transaction