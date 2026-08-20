import { useState } from 'react'
import IdentityWorld from './IdentityWorld'
import LifeWorld from './LifeWorld'
import WorldMoments from './WorldMoments'
import WorldEnding from './WorldEnding'
import HabitsWorld from './HabitsWorld'
import ProjectsWorld from './ProjectsWorld'
import ConnectWorld from './ConnectWorld'

function KingOfSouls() {
   const [showIdentity, setShowIdentity] = useState(false)
const [activeWorld, setActiveWorld] = useState(null)
const [showWorldMoments, setShowWorldMoments] = useState(false)
const [showWorldEnding, setShowWorldEnding] = useState(false)
const [showHabits, setShowHabits] = useState(false)
const [showProjects, setShowProjects] = useState(false)
const [showConnect, setShowConnect] = useState(false)

    if (showIdentity) {
  return (
    <IdentityWorld
      onBack={() => setShowIdentity(false)}
    />
  )
}

  if (activeWorld === 'life') {
    return (
      <LifeWorld
        onBack={() => setActiveWorld(null)}
      />
    )
  }

  if (showWorldMoments) {
    return (
      <WorldMoments
        onBack={() => setShowWorldMoments(false)}
      />
    )
  }

  if (showWorldEnding) {
  return (
    <WorldEnding
      onFinish={() => setShowWorldEnding(false)}
    />
  )
}

if (showHabits) {
  return (
    <HabitsWorld
      onBack={() => setShowHabits(false)}
    />
  )
}

if (showProjects) {
  return (
    <ProjectsWorld
      onBack={() => setShowProjects(false)}
    />
  )
}

if (showConnect) {
  return (
    <ConnectWorld
      onBack={() => setShowConnect(false)}
    />
  )
}

  return (
    <main className="king-world">

      <header className="world-header">
        <div className="world-brand">
          ATHMANADHAN
        </div>

        <div className="world-mode">
          LIFE MODE
        </div>
      </header>

      <section className="soul-stage">

        <div className="orbit-system">

          <div className="orbit orbit-outer"></div>
          <div className="orbit orbit-inner"></div>


          {/* IDENTITY */}

          <div
  className="orbit-node node-identity"
  onClick={() => setShowIdentity(true)}
>

            <div className="node-label-content">
              <span className="node-icon">🧭</span>
              <span className="node-label">IDENTITY</span>
            </div>

            <div className="node-preview">
              <span className="preview-number">01</span>

              <h2>IDENTITY</h2>

              <p>
                Who I am, what I value,
                and what I am becoming.
              </p>

              <span className="preview-action">
                EXPLORE ↗
              </span>
            </div>

          </div>


          {/* LIFE */}

          <div
  className="orbit-node node-life"
  onClick={() => setActiveWorld('life')}
>

            <div className="node-label-content">
              <span className="node-icon">🌱</span>
              <span className="node-label">LIFE</span>
            </div>

            <div className="node-preview">
              <span className="preview-number">02</span>

              <h2>LIFE</h2>

              <p>
                The chapters, experiences,
                and moments that shaped me.
              </p>

              <span className="preview-action">
                EXPLORE ↗
              </span>
            </div>

          </div>


          {/* MOMENTS */}

          <div className="orbit-node node-moments">

            <div className="node-label-content">
              <span className="node-icon">✦</span>
              <span className="node-label">MOMENTS</span>
            </div>

            <div className="node-preview">
              <span className="preview-number">03</span>

              <h2>MOMENTS</h2>

              <p>
                Important memories, milestones,
                and pieces of the journey.
              </p>

              <span className="preview-action">
                EXPLORE ↗
              </span>
            </div>

          </div>


         {/* PROJECTS */}

<div
  className="orbit-node node-create"
  onClick={() => setShowProjects(true)}
>

  <div className="node-label-content">
    <span className="node-icon">◇</span>
    <span className="node-label">PROJECTS</span>
  </div>

  <div className="node-preview">
    <span className="preview-number">04</span>

    <h2>PROJECTS</h2>

    <p>
      Websites, platforms, ideas,
      and things I have built.
    </p>

    <span className="preview-action">
      EXPLORE ↗
    </span>
  </div>

</div>

          {/* HABITS */}

<div
  className="orbit-node node-lab"
  onClick={() => setShowHabits(true)}
>

  <div className="node-label-content">
    <span className="node-icon">✦</span>
    <span className="node-label">HABITS</span>
  </div>

  <div className="node-preview">
    <span className="preview-number">05</span>

    <h2>HABITS</h2>

    <p>
      The small things I return to,
      learn from, and keep building.
    </p>

    <span className="preview-action">
      EXPLORE ↗
    </span>
  </div>

</div>


          {/* CONNECT */}

<div
  className="orbit-node node-vision"
  onClick={() => setShowConnect(true)}
>

  <div className="node-label-content">
    <span className="node-icon">⌁</span>
    <span className="node-label">CONNECT</span>
  </div>

  <div className="node-preview">
    <span className="preview-number">06</span>

    <h2>CONNECT</h2>

    <p>
      Find me, follow me,
      and stay connected.
    </p>

    <span className="preview-action">
      EXPLORE ↗
    </span>
  </div>

</div>
        </div>


        {/* CENTER */}

        <div className="soul-core">

          <img
            src="/king-of-souls-logo.png"
            alt="King of Souls"
          />

          <h1>ATHMANADHAN</h1>

          <p>BUILT FROM CURIOSITY</p>

        </div>

           </section>

      <button
        className="world-continue"
        onClick={() => setShowWorldEnding(true)}
      >
        CONTINUE →
      </button>

    </main>
  )
}

export default KingOfSouls