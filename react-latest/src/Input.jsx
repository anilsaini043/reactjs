import { useState } from "react";

const CONTROLINPUT = ()=> {
    const [name, setName] = useState("")
    return (
        <div style={{width: '500px', padding: '10px', margin: '20px'}}>
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Type here..."></input>
            <h2>
                Entered input value is : {name}
            </h2>
            <button onClick={()=> setName("")}>Reset</button>
        </div>
    )
}

export default CONTROLINPUT;