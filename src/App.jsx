import { useState } from 'react'
import './App.css'
import KingOfSouls from './components/KingOfSouls'

function App() {
  const [entered, setEntered] = useState(false)
  const [transitioning, setTransitioning] = useState(false)

  const enterWorld = () => {
    setTransitioning(true)

   setTimeout(() => {
  setEntered(true)
}, 550)
}
  if (entered) {
    return (
      <div className="world-enter">
        <KingOfSouls />
      </div>
    )
  }

  return (
    <main
      className={`identity-screen ${
        transitioning ? 'identity-exit' : ''
      }`}
    >
      <div className="ambient-orb ambient-orb-one"></div>
      <div className="ambient-orb ambient-orb-two"></div>

      <div className="identity-content">

        <div className="brand-logo">
          <img
            src="/king-of-souls-logo.png"
            alt="King of Souls"
          />
        </div>

        <p className="welcome-text">
  WELCOME TO MY WORLD
</p>

<h1>ATHMANADHAN</h1>

        <p className="identity-tagline">
          Built from curiosity. Driven by creation.
        </p>

        <button
          className="enter-button"
          onClick={enterWorld}
          disabled={transitioning}
        >
          <span>ENTER</span>
          <span className="enter-arrow">↗</span>
        </button>

      </div>
    </main>
  )
}

export default App