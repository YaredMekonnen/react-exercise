import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ButtonSection } from './ButtonSection'
import { Button } from './Button'
import { Textbox } from './Textbox'
import { TextBlock } from './TextBlock'
import { StoreItem } from './StoreItem'

function App() {

  const [show, setshow] = useState(false)

  const item1 = {title:"Bat", description:"Metal Ball", price:50}
  const item2 = {title:"Ball", description:"Metal", price:50}
  const item3 = {title:"Helmet", description:"Meta", price:50}

  const myArray = [item1, item2,item3]
  return (
    <>

     <Button  show={show} setshow={setshow}/>
     {show ? <StoreItem item={item1}/> : <></>}

    </>
  )
}

export default App
