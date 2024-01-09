import { useState } from "react"
import ListGroup from "./components/ListGroup/ListGroup"
import './App.css'

function App() {
  const items = ["New York","Kigali","Bujumbura"]
  return (
    <>
    <ListGroup heading="Miami" items={items} onSelectItem={()=>{}} />
    </>

  )
}

export default App
