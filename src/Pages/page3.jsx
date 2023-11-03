import { useState } from 'react'
import { Button } from './Pages/Button'
import { StoreItem } from './Pages/StoreItem'


export function page3(){
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