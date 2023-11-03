import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ButtonSection } from './ButtonSection'
import { Button } from './Button'
import { Textbox } from './Textbox'

function App() {


  return (
    <>
      <Button color={"orange"}/>
      <Button color={"blue"}/>
      <Button color={"green"}/>
      <Textbox />

    </>
  )
}

export default App
