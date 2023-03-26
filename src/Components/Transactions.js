import Transaction from './Transaction.js';
import { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState.js';

export default function Transactions () {
    let {onRemove}= useContext(GlobalContext);
    let {transactions}=useContext(GlobalContext);
    return(
        <div className = "list">
            <h3>History</h3>
            <div className="grayLine"></div>
            {transactions.map((transaction)=>{
               return( <Transaction key ={transaction.id} onClick ={onRemove} transaction= {transaction}/>)
            })}
        </div>
    )
}
