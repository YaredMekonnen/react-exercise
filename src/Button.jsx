import { useState } from "react"

export function Button({color}){
    const [count, setCount] = useState(0)

    function handleEvent(){
        setCount(count +1)
    }
    
    return (
        <button onClick={()=>handleEvent()}  style={{backgroundColor: color}}>
            <p>{count}</p>
        </button>
    )

}

Button.defaultProps = {
    color: "blue",
    text: "Hey manm"
}

