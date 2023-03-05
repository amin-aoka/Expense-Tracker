import {FaTimes} from 'react-icons/fa';

function Transaction ({transaction, onClick}){
    return(
        <div className="transaction">
            <span>{transaction.text}</span>
            <span>{transaction.amount}</span>
            <FaTimes onClick= {()=> onClick(transaction.id)} className = "closeIcon"/>
        </div>
    )
}
export default Transaction