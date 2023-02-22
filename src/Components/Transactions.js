import { useState } from 'react';
import Transaction from './Transaction.js';
export default function Transactions ({transaction}) {

    return(
        <div>
            <h3>History</h3>
            <Transaction transaction={transaction}/>
        </div>
    )
}
