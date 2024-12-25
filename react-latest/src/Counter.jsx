import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);
    const increase = ()=> {
        setCount(count+1);
    }

    const decrease = ()=> {
        setCount(count-1);
    }

    return (
        <div>
            <h2>Counter value is : {count}</h2>
            <button onClick={increase}>Increase by 1</button>
            <button onClick={decrease}>Decrease by 1</button>
        </div>
    )
}

export default Counter;