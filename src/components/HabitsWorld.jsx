function HabitsWorld({ onBack }) {
  return (
    <main className="habits-world">

      <button
        className="habits-back"
        onClick={onBack}
      >
        ← KING OF SOULS
      </button>

      <section className="habits-hero">

        <span className="habits-eyebrow">
          WORLD 04 · PERSONAL RHYTHMS
        </span>

        <h1>HABITS</h1>

        <p>
          Small things I keep returning to.
        </p>

      </section>

      <section className="habits-grid">

        <article className="habit-card">
          <span>01</span>
          <h2>LEARNING</h2>
          <p>
            Exploring technology, AI, coding,
            science and new ideas.
          </p>
        </article>

        <article className="habit-card">
          <span>02</span>
          <h2>BUILDING</h2>
          <p>
            Turning ideas into websites,
            digital experiences and projects.
          </p>
        </article>

        <article className="habit-card">
          <span>03</span>
          <h2>CREATING</h2>
          <p>
            Designing, experimenting and
            finding new ways to create.
          </p>
        </article>

        <article className="habit-card">
          <span>04</span>
          <h2>CHESS</h2>
          <p>
            Playing, thinking and creating
            ideas around the game.
          </p>
        </article>

        <article className="habit-card">
          <span>05</span>
          <h2>EXPLORING</h2>
          <p>
            Staying curious about what can
            be learned, tested and built next.
          </p>
        </article>

      </section>

      <footer className="habits-ending">
        <span>ATHMANADHAN</span>
        <p>CURIOUS · CREATIVE · ALWAYS BUILDING</p>
      </footer>

    </main>
  )
}

export default HabitsWorld