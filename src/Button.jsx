

export function Button({text, color,func,msg}){
    return (
        <button onClick={()=> props.func(msg)} style={{backgroundColor: color}}>
            <p>{text}</p>
        </button>
    )

}

Button.defaultProps = {
    color: "blue",
    text: "Hey manm"
}

