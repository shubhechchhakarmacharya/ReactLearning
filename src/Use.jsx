import { useState } from "react";

function Use(){
    let[count , Setcount] = useState(0)
    return(
        <button onClick={()=>Setcount(count+1)} className="rounded-md border-dashed border-2 border-indigo-200 border-y-indigo-500 mt-4 pt-1 pb-1 px-4">{count}</button>
    )
}

export default Use;