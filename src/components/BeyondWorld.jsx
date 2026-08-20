function BeyondWorld({ onBack }) {
  return (
    <main className="beyond-world">

      <button
        className="beyond-back"
        onClick={onBack}
      >
        ← CHAPTERS
      </button>

      <section className="beyond-hero">

        <span className="beyond-eyebrow">
          CHAPTER 08 · THE UNKNOWN
        </span>

        <h1>BEYOND</h1>

        <p className="beyond-intro">
          I don't know exactly where the road ends.
        </p>

        <p className="beyond-description">
          I know the direction I want to move in:
          learning, creating, experimenting, and building
          things that have meaning.
        </p>

      </section>


      <section className="beyond-article">

        {/* 01 — THE DIRECTION */}
        <article className="beyond-section">

          <div className="beyond-number">
            01
          </div>

          <div className="beyond-content">

            <span className="beyond-label">
              THE DIRECTION
            </span>

            <h2>
              Keep Moving Forward
            </h2>

            <p>
              The future is not completely defined yet.
              What matters is continuing to learn,
              experiment, and move toward things worth
              building.
            </p>

          </div>

        </article>


        {/* 02 — TECHNOLOGY */}
        <article className="beyond-section">

          <div className="beyond-number">
            02
          </div>

          <div className="beyond-content">

            <span className="beyond-label">
              TECHNOLOGY
            </span>

            <h2>
              Build With Technology
            </h2>

            <p>
              Technology is one of the spaces where I want
              to keep learning and creating, especially
              through software, AI, and new ideas.
            </p>

          </div>

        </article>


        {/* 03 — CREATION */}
        <article className="beyond-section">

          <div className="beyond-number">
            03
          </div>

          <div className="beyond-content">

            <span className="beyond-label">
              CREATION
            </span>

            <h2>
              Create More Than I Consume
            </h2>

            <p>
              I want to keep turning curiosity into things
              that can actually exist — websites, digital
              experiences, experiments, and ideas.
            </p>

          </div>

        </article>


        {/* 04 — EXPERIMENTATION */}
        <article className="beyond-section">

          <div className="beyond-number">
            04
          </div>

          <div className="beyond-content">

            <span className="beyond-label">
              EXPERIMENTATION
            </span>

            <h2>
              Stay Curious
            </h2>

            <p>
              Not every idea needs to become a finished
              product. Some ideas are valuable simply
              because they lead somewhere unexpected.
            </p>

          </div>

        </article>


        {/* 05 — MEANING */}
        <article className="beyond-section">

          <div className="beyond-number">
            05
          </div>

          <div className="beyond-content">

            <span className="beyond-label">
              MEANING
            </span>

            <h2>
              Build Things That Matter
            </h2>

            <p>
              The goal is not simply to make more things.
              It is to create things that have purpose,
              express ideas, solve problems, or leave
              something meaningful behind.
            </p>

          </div>

        </article>


        {/* 06 — THE UNKNOWN */}
        <article className="beyond-section">

          <div className="beyond-number">
            06
          </div>

          <div className="beyond-content">

            <span className="beyond-label">
              THE UNKNOWN
            </span>

            <h2>
              Leave Room For Discovery
            </h2>

            <p>
              There are still many things I don't know,
              and that is part of the journey.
              The future should have room to surprise me.
            </p>

          </div>

        </article>


        {/* 07 — THE VISION */}
        <article className="beyond-section beyond-section-final">

          <div className="beyond-number">
            07
          </div>

          <div className="beyond-content">

            <span className="beyond-label">
              THE VISION
            </span>

            <h2>
              Curious. Creative. Experimental.
            </h2>

            <p>
              Keep learning.
              Keep building.
              Keep exploring.
              Keep creating.
            </p>

          </div>

        </article>

      </section>


      <section className="beyond-ending">

        <span>
          THERE IS MORE AHEAD
        </span>

        <h2>
          The story doesn't end here.
        </h2>

        <p>
          It continues with whatever comes next.
        </p>

      </section>


    </main>
  )
}

export default BeyondWorld