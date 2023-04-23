import { useState } from "react";

function Use(){
    let[count , Setcount] = useState(0)
    return(
        <button onClick={()=>Setcount(count+1)}>{count}</button>
    )
}

export default Use;