function MomentsWorld({ onBack }) {
  return (
    <main className="moments-world">

      <button
        className="moments-back"
        onClick={onBack}
      >
        ← WORLD
      </button>


      <section className="moments-hero">

        <span className="moments-eyebrow">
          THE MEMORY ARCHIVE
        </span>

        <h1>MOMENTS</h1>

        <p className="moments-intro">
          The moments that became part of the story.
        </p>

        <p className="moments-description">
          Not every memory needs a long explanation.
          Some moments are better remembered through
          a photograph, a place, a face, or a feeling.
        </p>

      </section>


      <section className="moments-archive">


        {/* CHILDHOOD */}

        <article className="moment-card">

          <div className="moment-image">

            <div className="moment-placeholder">
              ADD YOUR PHOTO
            </div>

          </div>

          <div className="moment-info">

            <span className="moment-number">
              01
            </span>

            <span className="moment-label">
              CHILDHOOD
            </span>

            <h2>
              Where It Began
            </h2>

            <p>
              A space for memories from the early years.
            </p>

          </div>

        </article>


        {/* FAMILY */}

        <article className="moment-card moment-card-reverse">

          <div className="moment-image">

            <div className="moment-placeholder">
              ADD YOUR PHOTO
            </div>

          </div>

          <div className="moment-info">

            <span className="moment-number">
              02
            </span>

            <span className="moment-label">
              FAMILY
            </span>

            <h2>
              The People Who Matter
            </h2>

            <p>
              A space for meaningful family memories.
            </p>

          </div>

        </article>


        {/* SCHOOL */}

        <article className="moment-card">

          <div className="moment-image">

            <div className="moment-placeholder">
              ADD YOUR PHOTO
            </div>

          </div>

          <div className="moment-info">

            <span className="moment-number">
              03
            </span>

            <span className="moment-label">
              SCHOOL
            </span>

            <h2>
              Growing Up
            </h2>

            <p>
              Places, people, and memories from school life.
            </p>

          </div>

        </article>


        {/* FRIENDS */}

        <article className="moment-card moment-card-reverse">

          <div className="moment-image">

            <div className="moment-placeholder">
              ADD YOUR PHOTO
            </div>

          </div>

          <div className="moment-info">

            <span className="moment-number">
              04
            </span>

            <span className="moment-label">
              FRIENDS
            </span>

            <h2>
              Shared Years
            </h2>

            <p>
              A visual archive for friendships and memories.
            </p>

          </div>

        </article>


        {/* LIFE */}

        <article className="moment-card">

          <div className="moment-image">

            <div className="moment-placeholder">
              ADD YOUR PHOTO
            </div>

          </div>

          <div className="moment-info">

            <span className="moment-number">
              05
            </span>

            <span className="moment-label">
              LIFE
            </span>

            <h2>
              Along the Way
            </h2>

            <p>
              The small moments that become part of a life.
            </p>

          </div>

        </article>


      </section>


      <section className="moments-ending">

        <span>
          MEMORY IS PART OF THE JOURNEY
        </span>

        <h2>
          Some moments stay.
        </h2>

        <p>
          More memories will be added here over time.
        </p>

      </section>

    </main>
  )
}

export default MomentsWorld