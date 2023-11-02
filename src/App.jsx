import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ButtonSection } from './ButtonSection'
import { Button } from './Button'

function App() {
  function notify(msg){
    alert(msg)
  }

  return (
    <>
      <Button text={"Hey, Yared :)"} color={"orange"} func={notify} msg={"BTN 1 msg"}/>
      <Button text={"Hey, Man :)"} color={"purple"} func={notify} msg={"Ayy yow"}/>
      <Button />

    </>
  )
}

export default App
