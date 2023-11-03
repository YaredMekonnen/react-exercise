import { useState } from "react"
export function Textbox(){
    const[text,setText]= useState("")
    function handleEvent(e){
         setText(e.target.value)
         console.log("text has changed")
    }
    return(
        <>
        <input onChange={(e)=>handleEvent(e)}></input>
        <p style={{backgroundColor: "yellow"}}>{text}</p>
        </>
    )
}