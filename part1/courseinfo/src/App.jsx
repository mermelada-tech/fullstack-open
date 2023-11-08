import { useState } from 'react'
import { Button } from './Button'

const History = ({ allClicks }) => {
  return allClicks.length === 0 ? (
    <div>Presionar botones</div>
  ) : (
    <div>Historial: {allClicks.join(', ')}</div>
  )
}

const App = () => {
  const [clicks, setClicks] = useState({ left: 0, right: 0 })
  const [allClicks, setAllClicks] = useState([])

  const left = () => {
    setClicks({ ...clicks, left: clicks.left + 1 })
    setAllClicks(allClicks.concat('L'))
  }

  const right = () => {
    setClicks({ ...clicks, right: clicks.right + 1 })
    setAllClicks(allClicks.concat('R'))
  }

  return (
    <div className="app">
      {clicks.left}
      <Button text="Left" handleClick={left} />
      {clicks.right}
      <Button text="Right" handleClick={right} />
      <History allClicks={allClicks} />
    </div>
  )
}

export default App
