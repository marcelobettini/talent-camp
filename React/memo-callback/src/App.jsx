import { useState, useCallback } from 'react'
import './App.css'
import Header from './components/Header'
import CounterOne from './components/CounterOne'
import CounterTwo from './components/CounterTwo'
import CounterThree from './components/CounterThree'

function App() {
  const [counterOne, setCounterOne] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)
  const [counterThree, setCounterThree] = useState(0)

  const increment1 = useCallback(() => {
    setCounterOne(prevState => prevState + 1)
  }, [counterOne]);

  const increment2 = useCallback(() => {
    setCounterTwo(prevState => prevState + 1)
  }, [counterTwo]);

  const increment3 = useCallback(() => {
    setCounterThree(prevState => prevState + 1)
  }, [counterThree]);


  return (
    <main>
      <Header />
      <section className="counters">

        <CounterOne name="First Counter" counterOne={counterOne} increment1={increment1} />
        <CounterTwo name="Second Counter" counterTwo={counterTwo} increment2={increment2} />
        <CounterThree name="Third Counter" counterThree={counterThree} increment3={increment3} />
      </section>
    </main>
  )
}

export default App
