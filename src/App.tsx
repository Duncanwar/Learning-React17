import ListGroup from './components/ListGroup'
let items = [
  'New York',
  'San Francisco',
  'Tokyo',
  'London',
  'Paris'
]

const handleOnSelect = (item:string)=>{
console.log(item)
}
function App() {
  return (
    <ListGroup items={items} heading='Cities' onSelectItem={handleOnSelect}/>
  )
}

export default App
