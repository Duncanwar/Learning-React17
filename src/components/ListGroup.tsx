import { useState } from "react";

function ListGroup() {
    let items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ]
    const [selectedIndex, setSelectedIndex]=useState(-1)
    
    const handleClick = (event:MouseEvent)=>console.log(event)

    return (
        <>
            <h1>List</h1>
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {items.map((item) => (
                    <li className="list-group-item" onClick={handleClick} key={item}>{item}</li>
                ))}
            </ul>
        </>
    )
}

export default ListGroup;