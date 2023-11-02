import { useState } from "react"

export function Button({color}){
    const [count, setCount] = useState(0)
    
    return (
        <button onClick={(e)=>setCount(count + 1)}  style={{backgroundColor: color}}>
            <p>{count}</p>
        </button>
    )

}

Button.defaultProps = {
    color: "blue",
    text: "Hey manm"
}

