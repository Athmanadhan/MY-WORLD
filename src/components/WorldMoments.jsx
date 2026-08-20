function WorldMoments({ onBack }) {
  return (
    <main className="world-moments">

      <button
        className="world-moments-back"
        onClick={onBack}
      >
        ← WORLD
      </button>


      <section className="world-moments-page">

        {/* HEADER */}

        <header className="world-moments-header">

          <span>THE ARCHIVE</span>

          <h1>MOMENTS</h1>

          <p>
            Small pieces of a much bigger story.
          </p>

        </header>


        {/* MEMORY GRID */}

        <section className="world-moments-grid">


          {/* MEMORY 01 */}

          <article className="world-moment-card world-moment-large">

            <div className="world-moment-image">
              <span>ADD MEMORY</span>
            </div>

            <div className="world-moment-info">

              <span>01 · MEMORY</span>

              <h2>The Beginning</h2>

            </div>

          </article>


          {/* MEMORY 02 */}

          <article className="world-moment-card">

            <div className="world-moment-image">
              <span>ADD MEMORY</span>
            </div>

            <div className="world-moment-info">

              <span>02 · MEMORY</span>

              <h2>Growing Up</h2>

            </div>

          </article>


          {/* MEMORY 03 */}

          <article className="world-moment-card">

            <div className="world-moment-image">
              <span>ADD MEMORY</span>
            </div>

            <div className="world-moment-info">

              <span>03 · MEMORY</span>

              <h2>The People</h2>

            </div>

          </article>


          {/* MEMORY 04 */}

          <article className="world-moment-card world-moment-wide">

            <div className="world-moment-image">
              <span>ADD MEMORY</span>
            </div>

            <div className="world-moment-info">

              <span>04 · MEMORY</span>

              <h2>Places & Experiences</h2>

            </div>

          </article>


        </section>


        {/* ENDING */}

        <section className="world-moments-ending">

          <span>
            THE ARCHIVE IS STILL GROWING
          </span>

          <p>
            Some moments become stories.
            Others simply remain memories.
          </p>

        </section>


      </section>

    </main>
  )
}

export default WorldMoments