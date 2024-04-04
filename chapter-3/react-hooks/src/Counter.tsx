import {useState} from 'react'

const Counter =()=>{
    const [counter,setCounter]=useState<number>(0)

const handleCounter = (operation: string)=>{
    if(operation === 'add'){
        return setCounter(counter+1)
    }
    return setCounter(counter-1)
}

return (
    <p>
        Counter:{counter}<br />
        <button onClick={()=>{handleCounter('add')}}>+ Add</button>
        <button onClick={()=>{handleCounter('substract')}}>- Substract</button>
    </p>
)
}

export default Counter