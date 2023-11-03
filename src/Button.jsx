import { useState, useEffect } from "react"

export function Button({color}){
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    useEffect(()=>{
      console.log("you changed the count")
    },[count])
    useEffect(()=>{
        console.log("page has rendered")
    },[])
    
    return (
        <>
        <button onClick={()=>setCount(count+1)}  style={{backgroundColor: color}}>
            <p>{count}</p>
        </button>        
        </>

    )

}

Button.defaultProps = {
    color: "blue",
    text: "Hey manm"
}

