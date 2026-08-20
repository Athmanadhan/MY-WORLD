function OriginsWorld({ onBack }) {
  return (
    <main className="origins-world">
      

      <button
        className="origins-back"
        onClick={onBack}
      >
        ← CHAPTERS
      </button>


      {/* HERO */}

      <section className="origins-hero">

        <span className="origins-eyebrow">
          CHAPTER 01 · BEGINNING
        </span>

        <h1>ORIGINS</h1>

        <p className="origins-hero-line">
          Where the story begins.
        </p>

      </section>


      {/* ARTICLE */}

      <article className="origins-article">


        {/* SECTION 01 */}

        <section className="origins-section">

          <span className="origins-section-number">
            01
          </span>

          <div>

            <span className="origins-section-label">
              THE BEGINNING
            </span>

            <h2>
              Kanchipuram
            </h2>

            <p>
              I was born and brought up in
              Kanchipuram, Tamil Nadu.
            </p>

            <p>
              This is where my story begins.
              Before the ideas, projects,
              interests and ambitions that
              became part of my life, there
              was simply a place I called home.
            </p>

          </div>

        </section>


        {/* PHOTO 01 */}

        <section className="origins-photo">

          <div className="photo-placeholder">
            <span>YOUR CHILDHOOD PHOTO</span>
            <small>
              Add your own image here
            </small>
          </div>

        </section>


        {/* SECTION 02 */}

        <section className="origins-section">

          <span className="origins-section-number">
            02
          </span>

          <div>

            <span className="origins-section-label">
              EARLY CHILDHOOD
            </span>

            <h2>
              The Early Years
            </h2>

            <p>
              My childhood was a time of
              discovering the world around me.
              I was curious about things,
              interested in understanding them,
              and always willing to explore.
            </p>

            <p>
              Those early years became the
              foundation for the way I think
              today — curious about how things
              work, interested in trying things,
              and never completely satisfied
              with simply accepting something
              as it is.
            </p>

          </div>

        </section>


        {/* PHOTO 02 */}

        <section className="origins-photo origins-photo-wide">

          <div className="photo-placeholder">
            <span>YOUR CHILDHOOD MEMORY</span>
            <small>
              Add your own image here
            </small>
          </div>

        </section>


        {/* SECTION 03 */}

        <section className="origins-section">

          <span className="origins-section-number">
            03
          </span>

          <div>

            <span className="origins-section-label">
              MEMORIES
            </span>

            <h2>
              The Beginning of Everything
            </h2>

            <p>
              Childhood is made from small
              things — places, people,
              experiences and ordinary moments
              that become meaningful when
              remembered later.
            </p>

            <p>
              Looking back, these experiences
              were more than just memories.
              They were the beginning of the
              person I would slowly become.
            </p>

          </div>

        </section>


        {/* PHOTO GRID */}

        <section className="origins-photo-grid">

          <div className="photo-placeholder">
            <span>PHOTO 01</span>
          </div>

          <div className="photo-placeholder">
            <span>PHOTO 02</span>
          </div>

          <div className="photo-placeholder">
            <span>PHOTO 03</span>
          </div>

        </section>


        {/* ENDING */}

        <section className="origins-ending">

          <span>
            CHAPTER 01
          </span>

          <h2>
            Every story
            <br />
            has a beginning.
          </h2>

          <p>
            This was mine.
          </p>

          <button
            onClick={onBack}
          >
            ← BACK TO CHAPTERS
          </button>

        </section>


      </article>

    </main>
  )
}

export default OriginsWorld