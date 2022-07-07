import React from 'react'
let renderCount = 0

const CounterTwo = ({ name, counterTwo, increment2 }) => {
    renderCount++
    return (
        <div className='counter'>
            <h2>{name}</h2>
            <p className='boxed-number'>{counterTwo}</p>
            <button onClick={increment2}>Add One</button>
            <span>Rendered {renderCount} times</span>
        </div>
    )
}

export default React.memo(CounterTwo);