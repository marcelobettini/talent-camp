import React from 'react'
let renderCount = 0

const CounterThree = ({ name, counterThree, increment3 }) => {
    renderCount++
    return (
        <div className='counter'>
            <h2>{name}</h2>
            <p className='boxed-number'>{counterThree}</p>
            <button onClick={increment3}>Add One</button>
            <span>Rendered {renderCount} times</span>
        </div>
    )
}

export default React.memo(CounterThree);