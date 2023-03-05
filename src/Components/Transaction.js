import {FaTimes} from 'react-icons/fa'

function Transaction ({transaction}){
    return(
        <div className="transaction">
            <span>{transaction.text}</span>
            <span>{transaction.amount}</span>
            <FaTimes/>
        </div>
    )
}
export default Transaction