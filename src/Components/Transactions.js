import Transaction from './Transaction.js';
export default function Transactions ({transactions}) {

    return(
        <div>
            <h3>History</h3>
            {transactions.map((transaction)=>{
               return( <Transaction key ={transaction.id} transaction= {transaction}/>)
            })}
        </div>
    )
}
