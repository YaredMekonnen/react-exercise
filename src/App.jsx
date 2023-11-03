import './App.css'
import { HashRouter, Routes, Route, Router } from 'react-router-dom'
import { Home } from './Pages/Home'
import { page1 } from './Pages/page1'
import { page2 } from './Pages/page2'
import { page3 } from './Pages/page3'


function App() {
 return(
     <Router>
         <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/page1" element={<page1 />}/>
        <Route path="/page2" element={<page2 />}/>
        <Route path="/page3" element={<page3 />}/>
         </Routes>

       
     </Router>
 )
 
}

export default App
