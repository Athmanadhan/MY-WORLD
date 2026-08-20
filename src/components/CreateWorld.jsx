function CreateWorld({ onBack }) {
  return (
    <main className="create-world">

      <button
        className="create-back"
        onClick={onBack}
      >
        ← CHAPTERS
      </button>


      {/* HERO */}

      <section className="create-hero">

        <span className="create-eyebrow">
          CHAPTER 05 · THE WORK
        </span>

        <h1>CREATE</h1>

        <p>
          Ideas become projects when I decide
          to build them.
        </p>

      </section>


      <article className="create-article">


        {/* INTRO */}

        <section className="create-section">

          <span className="create-number">
            01
          </span>

          <div>

            <span className="create-label">
              THE MINDSET
            </span>

            <h2>
              From Ideas to Things
            </h2>

            <p>
              I don't want to only use the things
              other people create.
            </p>

            <p>
              When an idea interests me, I want
              to understand it, experiment with it,
              and eventually try to build something
              of my own.
            </p>

            <p>
              Creating became a way for me to turn
              curiosity into something real.
            </p>

          </div>

        </section>


        {/* PROJECT 01 */}

        <section className="create-project">

          <div className="create-project-number">
            01
          </div>

          <div className="create-project-content">

            <span className="create-label">
              PERSONAL WORLD
            </span>

            <h2>
              ATHMANADHAN
            </h2>

            <h3>
              King of Souls
            </h3>

            <p>
              A personal digital world designed
              to bring together my identity,
              memories, interests, projects,
              experiments, and future ambitions.
            </p>

            <div className="create-tags">

              <span>WEB</span>
              <span>DESIGN</span>
              <span>INTERACTION</span>

            </div>

            <button className="create-project-button">
              EXPLORE PROJECT ↗
            </button>

          </div>

        </section>


        {/* PROJECT 02 */}

        <section className="create-project">

          <div className="create-project-number">
            02
          </div>

          <div className="create-project-content">

            <span className="create-label">
              CHESS
            </span>

            <h2>
              CHESS SYSTEMS
            </h2>

            <h3>
              League & Tournament Ideas
            </h3>

            <p>
              Experiments around chess leagues,
              rankings, schedules, matches,
              playoff systems, and interactive
              tournament experiences.
            </p>

            <div className="create-tags">

              <span>CHESS</span>
              <span>SYSTEMS</span>
              <span>WEB</span>

            </div>

            <button className="create-project-button">
              VIEW PROJECT ↗
            </button>

          </div>

        </section>


        {/* PROJECT 03 */}

        <section className="create-project">

          <div className="create-project-number">
            03
          </div>

          <div className="create-project-content">

            <span className="create-label">
              EXPERIMENTAL
            </span>

            <h2>
              DIGITAL EXPERIENCES
            </h2>

            <h3>
              Interactive Ideas
            </h3>

            <p>
              Small experiments involving
              animation, interfaces, visual
              concepts, interaction, and unusual
              digital experiences.
            </p>

            <div className="create-tags">

              <span>UI</span>
              <span>ANIMATION</span>
              <span>EXPERIMENTS</span>

            </div>

            <button className="create-project-button">
              VIEW PROJECTS ↗
            </button>

          </div>

        </section>


        {/* PROJECT 04 */}

        <section className="create-project">

          <div className="create-project-number">
            04
          </div>

          <div className="create-project-content">

            <span className="create-label">
              CURRENT
            </span>

            <h2>
              MORE TO COME
            </h2>

            <h3>
              Still Building
            </h3>

            <p>
              This is not a finished collection.
              More ideas, experiments, websites,
              and projects will continue to appear
              here as I build them.
            </p>

            <div className="create-tags">

              <span>BUILDING</span>
              <span>LEARNING</span>
              <span>CREATING</span>

            </div>

          </div>

        </section>


        {/* PROJECT SPACE */}

        <section className="create-gallery">

          <div className="create-project-placeholder">
            <span>PROJECT IMAGE</span>
          </div>

          <div className="create-project-placeholder">
            <span>PROJECT IMAGE</span>
          </div>

        </section>


        {/* ENDING */}

        <section className="create-ending">

          <span>
            CHAPTER 05
          </span>

          <h2>
            Don't just imagine it.
            <br />
            Build it.
          </h2>

          <p>
            Every project starts with curiosity.
          </p>

          <button onClick={onBack}>
            ← BACK TO CHAPTERS
          </button>

        </section>

      </article>

    </main>
  )
}

export default CreateWorld