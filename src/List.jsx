import { useState } from "react";
import Add from "./Add";
import Show from "./Show";
function List() {
    const[list, setList] = useState([]);
    return(
        <div>
            <Add></Add>
            <Show list = {list}/>
        </div>
    )
}
export default List;