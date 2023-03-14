import Transaction from './Transaction.js';
export default function Transactions ({transactions,onClick}) {

    return(
        <div className = "list">
            <h3>History</h3>
            <div className="grayLine"></div>
            {transactions.map((transaction)=>{
               return( <Transaction   key ={transaction.id} onClick ={onClick} transaction= {transaction}/>)
            })}
        </div>
    )
}
