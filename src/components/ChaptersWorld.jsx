import { useState } from 'react'
import OriginsWorld from './OriginsWorld'
import FamilyWorld from './FamilyWorld'
import SchoolWorld from './SchoolWorld'
import FriendsWorld from './FriendsWorld'
import CreateWorld from './CreateWorld'
import CreationWorld from './CreationWorld'
import NowWorld from './NowWorld'
import BeyondWorld from './BeyondWorld'

function ChaptersWorld({ onBack }) {

  const [showOrigins, setShowOrigins] = useState(false)
  const [showFamily, setShowFamily] = useState(false)
  const [showSchool, setShowSchool] = useState(false)
 const [showFriends, setShowFriends] = useState(false)
 const [showCreate, setShowCreate] = useState(false)
 const [showCreation, setShowCreation] = useState(false)
 const [showNow, setShowNow] = useState(false)
 const [showBeyond, setShowBeyond] = useState(false)

  // =========================================
  // OPEN ORIGINS
  // =========================================

  if (showOrigins) {
    return (
      <OriginsWorld
        onBack={() => setShowOrigins(false)}
      />
    )
  }


  // =========================================
  // OPEN FAMILY
  // =========================================

  if (showFamily) {
    return (
      <FamilyWorld
        onBack={() => setShowFamily(false)}
      />
    )
  }


  // =========================================
  // OPEN SCHOOL
  // =========================================

  if (showSchool) {
    return (
      <SchoolWorld
        onBack={() => setShowSchool(false)}
      />
    )
  }

  if (showFriends) {
  return (
    <FriendsWorld
      onBack={() => setShowFriends(false)}
    />
  )
  }
  
  if (showCreate) {
  return (
    <CreateWorld
      onBack={() => setShowCreate(false)}
    />
  )
}

if (showCreation) {
  return (
    <CreationWorld
      onBack={() => setShowCreation(false)}
    />
  )
}

if (showNow) {
  return (
    <NowWorld
      onBack={() => setShowNow(false)}
    />
  )
}

if (showBeyond) {
  return (
    <BeyondWorld
      onBack={() => setShowBeyond(false)}
    />
  )
}

  return (
    <main className="chapters-world">

      <button
        className="chapters-back"
        onClick={onBack}
      >
        ← LIFE
      </button>


      <div className="chapters-header">

        <span>THE JOURNEY</span>

        <h1>MY CHAPTERS</h1>

        <p>
          Every chapter is a doorway into another part of the story.
        </p>

      </div>


      <div className="timeline">

        <div className="timeline-line"></div>


        {/* 01 — ORIGINS */}

        <article
          className="timeline-item timeline-left"
          onClick={() => setShowOrigins(true)}
        >

          <span className="timeline-number">
            01
          </span>

          <div className="timeline-dot"></div>

          <div className="timeline-content">

            <span>
              BEGINNING
            </span>

            <h2>
              ORIGINS
            </h2>

            <p>
              Where the story starts.
            </p>

          </div>

        </article>


        {/* 02 — FAMILY */}

        <article
  className="timeline-item timeline-right"
  onClick={() => setShowFamily(true)}
>

          <span className="timeline-number">
            02
          </span>

          <div className="timeline-dot"></div>

          <div className="timeline-content">

            <span>
              FAMILY
            </span>

            <h2>
              THE PEOPLE
            </h2>

            <p>
              The people closest to the story.
            </p>

          </div>

        </article>


        {/* 03 — SCHOOL */}

        <article
          className="timeline-item timeline-left"
          onClick={() => setShowSchool(true)}
        >

          <span className="timeline-number">
            03
          </span>

          <div className="timeline-dot"></div>

          <div className="timeline-content">

            <span>
              SCHOOL
            </span>

            <h2>
              GROWING
            </h2>

            <p>
              A chapter of learning and growing.
            </p>

          </div>

        </article>


        {/* 04 — FRIENDSHIPS */}

        <article
          className="timeline-item timeline-right"
          onClick={() => setShowFriends(true)}
        >

          <span className="timeline-number">
            04
          </span>

          <div className="timeline-dot"></div>

          <div className="timeline-content">

            <span>
              FRIENDSHIPS
            </span>

            <h2>
              THE PEOPLE
            </h2>

            <p>
              People who travelled through the years.
            </p>

          </div>

        </article>


        {/* 05 — DISCOVERY */}

        <article
          className="timeline-item timeline-left"
          onClick={() => setShowCreate(true)}
        >

          <span className="timeline-number">
            05
          </span>

          <div className="timeline-dot"></div>

          <div className="timeline-content">

            <span>
              DISCOVERY
            </span>

            <h2>
              CURIOSITY
            </h2>

            <p>
              Curiosity turning into interests.
            </p>

          </div>

        </article>


        {/* 06 — CREATION */}

        {/* 06 — CREATION */}

<article
  className="timeline-item timeline-right"
  onClick={() => setShowCreation(true)}
>

          <span className="timeline-number">
            06
          </span>

          <div className="timeline-dot"></div>

          <div className="timeline-content">

            <span>
              CREATION
            </span>

            <h2>
              BUILDING
            </h2>

            <p>
              Ideas becoming things.
            </p>

          </div>

        </article>


        {/* 07 — NOW */}

        <article
  className="timeline-item timeline-left"
  onClick={() => setShowNow(true)}
>

          <span className="timeline-number">
            07
          </span>

          <div className="timeline-dot"></div>

          <div className="timeline-content">

            <span>
              NOW
            </span>

            <h2>
              TODAY
            </h2>

            <p>
              The chapter being written today.
            </p>

          </div>

        </article>


        {/* 08 — BEYOND */}

        <article
  className="timeline-item timeline-right"
  onClick={() => setShowBeyond(true)}
>

          <span className="timeline-number">
            08
          </span>

          <div className="timeline-dot"></div>

          <div className="timeline-content">

            <span>
              BEYOND
            </span>

            <h2>
              WHAT'S NEXT
            </h2>

            <p>
              The direction still unfolding.
            </p>

          </div>

        </article>

      </div>


      <div className="chapters-ending">

        <span>
          THE JOURNEY CONTINUES
        </span>

        <p>
          Built from curiosity. Driven by creation.
        </p>

      </div>

    </main>
  )
}

export default ChaptersWorld