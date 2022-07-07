import React from 'react'
let renderCount = 0

const CounterOne = ({ name, counterOne, increment1 }) => {
    renderCount++
    return (
        <div className='counter'>
            <h2>{name}</h2>
            <p className='boxed-number'>{counterOne}</p>
            <button onClick={increment1}>Add One</button>
            <span>Rendered {renderCount} times</span>
        </div>
    )
}

export default React.memo(CounterOne)