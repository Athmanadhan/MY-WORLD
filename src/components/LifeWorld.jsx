import { useState } from 'react'
import ChaptersWorld from './ChaptersWorld'
import MomentsWorld from './MomentsWorld'
import JourneyWorld from './JourneyWorld'

function LifeWorld({ onBack }) {
  const [showChapters, setShowChapters] = useState(false)
  const [showMoments, setShowMoments] = useState(false)
  const [showJourney, setShowJourney] = useState(false)
  if (showChapters) {
    return (
      <ChaptersWorld
        onBack={() => setShowChapters(false)}
      />
    )
  }

  if (showMoments) {
  return (
    <MomentsWorld
      onBack={() => setShowMoments(false)}
    />
  )
}

if (showJourney) {
  return (
    <JourneyWorld
      onBack={() => setShowJourney(false)}
    />
  )
}
  return (
    <main className="life-world">

      <button
        className="life-back"
        onClick={onBack}
      >
        ← WORLD
      </button>

      <div className="life-world-content">

        <div className="life-eyebrow">
          CHAPTER 02
        </div>

        <h1>
          LIFE
        </h1>

        <p className="life-intro">
          The experiences, people, places,
          interests and moments that became
          part of my journey.
        </p>

        <div className="life-divider"></div>

        <section className="life-chapters">

          <article
  className="life-card"
  onClick={() => setShowChapters(true)}
>
            <span>01</span>
            <h2>CHAPTERS</h2>
            <p>
              Different stages of the journey
              and the things that shaped them.
            </p>
          </article>

          <article className="life-card" onClick={() => setShowMoments(true)}>
            
            <span>02</span>
            <h2>MOMENTS</h2>
            <p>
              Small and important moments
              worth remembering.
            </p>
          </article>

          <article className="life-card" onClick={() => setShowJourney(true)}>
            <span>03</span>
            <h2>JOURNEY</h2>
            <p>
              Places, experiences, interests
              and things discovered along the way.
            </p>
          </article>

        </section>

      </div>

    </main>
  )
}

export default LifeWorld