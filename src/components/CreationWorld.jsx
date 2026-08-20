function CreationWorld({ onBack }) {
  return (
    <main className="creation-world">

      <button
        className="creation-back"
        onClick={onBack}
      >
        ← CHAPTERS
      </button>

      <section className="creation-hero">

        <span>
          CHAPTER 06 · THE BUILDER
        </span>

        <h1>CREATION</h1>

        <p>
          The things I turn from ideas into reality.
        </p>

      </section>


      <article className="creation-article">

        <section className="creation-intro">

          <span>01</span>

          <div>

            <small>
              THE BUILDER
            </small>

            <h2>
              I Like Making Things Real
            </h2>

            <p>
              An idea becomes different when you
              actually build it.
            </p>

            <p>
              Every project gives me a chance to
              learn something, solve a problem,
              experiment with an idea, and create
              something that did not exist before.
            </p>

          </div>

        </section>


        <section className="creation-project">

          <span>01</span>

          <div>

            <small>WEB · PERSONAL</small>

            <h2>
              King of Souls
            </h2>

            <p>
              My personal digital world —
              combining identity, life, memories,
              creativity, projects, and the future
              into one interactive experience.
            </p>

            <div className="creation-image-space">
              <span>
                ADD PROJECT IMAGE
              </span>
            </div>

          </div>

        </section>


        <section className="creation-project">

          <span>02</span>

          <div>

            <small>CHESS · SYSTEM</small>

            <h2>
              Chess Projects
            </h2>

            <p>
              Tournament ideas, league systems,
              rankings, schedules, matches, and
              interactive chess experiences.
            </p>

            <div className="creation-image-space">
              <span>
                ADD PROJECT IMAGE
              </span>
            </div>

          </div>

        </section>


        <section className="creation-project">

          <span>03</span>

          <div>

            <small>EXPERIMENTS</small>

            <h2>
              Digital Experiments
            </h2>

            <p>
              Small ideas that help me understand
              technology, interaction, design,
              animation, and creative possibilities.
            </p>

            <div className="creation-image-space">
              <span>
                ADD PROJECT IMAGE
              </span>
            </div>

          </div>

        </section>


        <section className="creation-ending">

          <small>
            STILL BUILDING
          </small>

          <h2>
            The next creation
            <br />
            hasn't been built yet.
          </h2>

          <p>
            And that's the interesting part.
          </p>

          <button onClick={onBack}>
            ← BACK TO CHAPTERS
          </button>

        </section>

      </article>

    </main>
  )
}

export default CreationWorld