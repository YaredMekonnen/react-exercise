import { useState, useEffect } from "react"

export function Button({color, show, setshow}){

    return (
        <>
        <button onClick={()=>setshow(!show)}  style={{backgroundColor: color}}>
            <p>{show ? "Hide Item" : "show item"}</p>
        </button>        
        </>

    )

}

Button.defaultProps = {
    color: "orange",
    text: "Hey manm"
}

