import Transaction from './Transaction.js';
export default function Transactions ({transactions,onClick}) {

    return(
        <div>
            <h3>History</h3>
            {transactions.map((transaction)=>{
               return( <Transaction   key ={transaction.id} onClick ={onClick} transaction= {transaction}/>)
            })}
        </div>
    )
}
