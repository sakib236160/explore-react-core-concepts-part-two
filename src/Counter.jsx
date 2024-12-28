import { useState } from "react"

export default function Counters(){
    // const [count,setCount] = useState(0);
    const [count,setCount] = useState(0);

    const handleClick = () =>{
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleClick2 = () =>{
        const newCount = count -1;
        setCount(newCount);
    }

    return (
        <div style={{border: '2px solid yellow'}}>
            <h3>Counter:{count}</h3>
            <button onClick={handleClick}>Add</button>
            <button onClick={handleClick2}>Reduse</button>
            {/* <button onClick={()=>{setCount(count + 1)}}>Add</button> */}
            {/* <button onClick={()=>{setCount(count - 1)}}>Mins</button> */}
        </div>
    )
}