function WorldEnding({ onFinish }) {
  return (
    <main className="world-ending">

      <div className="ending-content">

        <span className="ending-eyebrow">
          THE WORLD OF ATHMANADHAN
        </span>

        <h1>
          THANK YOU
        </h1>

        <p>
          Thank you for taking the time to explore
          a small part of my world.
        </p>

        <p>
          This is only one chapter of a much bigger journey.
        </p>

        <div className="ending-symbol">
          ✦
        </div>

        <button
          className="ending-finish"
          onClick={onFinish}
        >
          FINISH
        </button>

        <span className="ending-footer">
          ATHMANADHAN — KING OF SOULS
        </span>

      </div>

    </main>
  )
}

export default WorldEnding