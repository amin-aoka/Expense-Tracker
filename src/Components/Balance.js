import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const Balance =  ()=>{
  const {total} = useContext(GlobalContext)

  return(
        <div className="balance">
          <p style = {{fontWeight:"bold"}}>YOUR BALANCE</p>
          <p style= {{fontWeight:"bold", fontSize : "30px"}} id="balance"> ${total.toFixed(2)}</p>
        </div>
    )
}

export default Balance;