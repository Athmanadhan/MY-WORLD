function ProjectsWorld({ onBack }) {
  return (
    <main className="projects-world">

      {/* BACK */}

      <button
        className="projects-back"
        onClick={onBack}
      >
        ← KING OF SOULS
      </button>


      {/* HERO */}

      <section className="projects-hero">

        <span className="projects-eyebrow">
          WORLD 05 · THINGS I BUILD
        </span>

        <h1>PROJECTS</h1>

        <p>
          Ideas that became something real.
        </p>

      </section>


      {/* PROJECT 01 — MY WORLD */}

      <section className="project-section">

        <div className="project-heading">

          <span className="project-number">
            01
          </span>

          <div>
            <span className="project-label">
              PERSONAL WORLD
            </span>

            <h2>MY WORLD</h2>

            <p className="project-subtitle">
              ATHMANADHAN — KING OF SOULS
            </p>
          </div>

        </div>


        <div className="project-layout">

          <article className="project-article">

            <p>
              My World is a personal digital experience built
              around the idea that a portfolio can be more than
              a collection of projects.
            </p>

            <p>
              ATHMANADHAN — KING OF SOULS is designed as a
              digital world where identity, life, memories,
              creativity and the things I build can exist
              together.
            </p>

            <p>
              Instead of simply presenting information on
              separate pages, the experience allows someone to
              explore different parts of my world through
              interactive gateways and personal chapters.
            </p>

            <p>
              It is an ongoing experiment in combining
              storytelling, design, interaction and technology
              into something that feels personal.
            </p>

          </article>


          <div className="project-image-space">

            <span>PROJECT IMAGE</span>

            <p>
              Add your own screenshot later
            </p>

          </div>

        </div>

      </section>


      {/* PROJECT 02 — PORTFOLIO */}

      <section className="project-section">

        <div className="project-heading">

          <span className="project-number">
            02
          </span>

          <div>
            <span className="project-label">
              PROFESSIONAL
            </span>

            <h2>MY PORTFOLIO</h2>

            <p className="project-subtitle">
              A DIGITAL SPACE FOR MY WORK
            </p>
          </div>

        </div>


        <div className="project-layout">

          <article className="project-article">

            <p>
              My portfolio is a space created to present the
              things I build, the technologies I explore and
              the direction I am growing towards.
            </p>

            <p>
              It brings together my projects, experiments,
              creative work and technical interests in one
              place.
            </p>

            <p>
              I wanted the portfolio to reflect not only what
              I have made, but also how I think about design,
              technology and creating digital experiences.
            </p>

            <p>
              It is part of my journey of learning, building
              and continuously improving the way I present
              my work.
            </p>

          </article>


          <div className="project-image-space">

            <span>PORTFOLIO IMAGE</span>

            <p>
              Add your portfolio screenshot later
            </p>

          </div>

        </div>

      </section>


      {/* PROJECT 03 — GAMEGROUND */}

      <section className="project-section">

        <div className="project-heading">

          <span className="project-number">
            03
          </span>

          <div>
            <span className="project-label">
              PLATFORM
            </span>

            <h2>GAMEGROUND</h2>

            <p className="project-subtitle">
              ONE PLATFORM. EVERY GAME. EVERY TOURNAMENT.
            </p>

          </div>

        </div>


        <div className="project-layout">

          <article className="project-article">

            <p>
              GameGround is a tournament-management platform
              I am building to bring different games and
              tournaments into one organised system.
            </p>

            <p>
              The idea is to make it possible for organisers
              to create tournaments, manage teams and players,
              generate schedules, maintain points tables and
              handle different tournament formats.
            </p>

            <p>
              The project is also an experiment in building a
              larger software system with structured data,
              scheduling logic, responsive interfaces and
              future scalability in mind.
            </p>

            <p>
              GameGround represents one of my bigger steps
              toward building software that solves a complete
              problem rather than only creating a single page.
            </p>

          </article>


          <div className="project-image-space">

            <span>GAMEGROUND IMAGE</span>

            <p>
              Add your project screenshot later
            </p>

          </div>

        </div>

      </section>


      {/* ENDING */}

      <section className="projects-ending">

        <span>
          STILL BUILDING
        </span>

        <h2>
          These are only the beginning.
        </h2>

        <p>
          More ideas will become real.
        </p>

      </section>


      {/* FOOTER */}

      <footer className="projects-footer">

        <span>
          ATHMANADHAN
        </span>

        <span>
          BUILT FROM CURIOSITY. DRIVEN BY CREATION.
        </span>

      </footer>

    </main>
  )
}

export default ProjectsWorld