import { useState } from "react"
export default function Team(){
    const teamStyle ={
        border:'2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }

    const [count, setCount] = useState(11);

    const handleClick =()=>{
        const newCount = count + 1;
        setCount(newCount)
    }

    const handleClick2 =()=>{
        const newCount = count - 1;
        setCount(newCount)
    }


    return(
        <div style={teamStyle}>
            <h3>Players:{count}</h3>
            <br />
            <button onClick={handleClick}>add</button>
            <button onClick={handleClick2}>removed</button>
        </div>
    )
}