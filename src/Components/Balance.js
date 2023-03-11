const Balance =  ({balance})=>{
    return(
        <div className="balance">
          <p style = {{fontWeight:"bold"}}>YOUR BALANCE</p>
          <p style= {{fontWeight:"bold", fontSize : "30px"}} id="balance"> ${balance.toFixed(2)}</p>
        </div>
    )
}

export default Balance;