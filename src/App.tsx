import { useState } from "react"
import Alert from "./components/Alert"
import { Button } from "./components/Button"
import ListGroup from "./components/ListGroup/ListGroup"

function App() {
  const items = ["New York","Kigali","Bujumbura"]
  const [alertVisible, setAlertVisibility] = useState(false)
  return (
    <>
    <ListGroup heading="Miami" items={items} onSelectItem={()=>{}} />
    </>

  )
}

export default App
