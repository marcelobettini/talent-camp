import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByStep, reset, incrementAsync } from "./features/counter/counterSlice";
import React, { useState } from 'react'

const SuperCounter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const [incrementStep, setIncrementStep] = useState(3)
    return (
        <section>
            <h2>SuperCounter</h2>
            <p>Count is {count}</p>
            <button onClick={() => dispatch(increment())} aria-label="Increment by 1">+One</button>
            <button onClick={() => dispatch(decrement())} aria-label="Decrement by 1">-One</button>
            <button onClick={() => dispatch(reset())} aria-label="Reset to 0">Reset</button>
            <input aria-label="increment step value"
                value={incrementStep}
                onChange={(e) => setIncrementStep(+e.target.value)}
            />
            <button onClick={() => dispatch(incrementByStep(incrementStep || 0))} aria-label="increment by step">Add by Step</button>
            <button onClick={() => dispatch(incrementAsync(incrementStep || 0))} aria-label="increment by step after 4 seconds" className="asyncButton">Async Add by Step</button>

        </section>
    )
}

export default SuperCounter