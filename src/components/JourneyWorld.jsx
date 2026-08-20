function JourneyWorld({ onBack }) {
  return (
    <main className="journey-world">

      <button
        className="journey-back"
        onClick={onBack}
      >
        ← LIFE
      </button>

      <section className="journey-page">

        <header className="journey-header">
          <span>THE JOURNEY</span>
          <h1>WHERE I'VE BEEN.<br />WHERE I'M GOING.</h1>
        </header>


        <div className="journey-card">

          <div className="journey-intro">

            <span className="journey-label">
              A SHORT VIEW OF THE JOURNEY
            </span>

            <h2>
              Still becoming.
            </h2>

            <p>
              My journey is still being written. From growing up in
              Kanchipuram to becoming a student, creator and builder,
              every stage has added something to the person I am today.
            </p>

          </div>


          <div className="journey-divider"></div>


          {/* ACADEMIC LIFE */}

          <section className="journey-section">

            <div className="journey-section-number">
              01
            </div>

            <div className="journey-section-content">

              <span>ACADEMIC LIFE</span>

              <h3>
                Learning became part of the journey.
              </h3>

              <p>
                My academic journey has taken me from school life at
                SSKV Boys Matric Higher Secondary School to the next
                stage of my education.
              </p>

              <div className="journey-highlight">

                <strong>
                  1st B.E. · COMPUTER SCIENCE & ENGINEERING
                </strong>

                <span>
                  Sri Venkateswara College of Engineering
                </span>

              </div>

            </div>

          </section>


          <div className="journey-divider"></div>


          {/* WHAT I AM LEARNING */}

          <section className="journey-section">

            <div className="journey-section-number">
              02
            </div>

            <div className="journey-section-content">

              <span>WHAT I'M LEARNING</span>

              <h3>
                Understanding how ideas become real.
              </h3>

              <p>
                My interests continue to grow around technology,
                coding, artificial intelligence, design, chess and
                creative experimentation.
              </p>

            </div>

          </section>


          <div className="journey-divider"></div>


          {/* WHAT I AM BUILDING */}

          <section className="journey-section">

            <div className="journey-section-number">
              03
            </div>

            <div className="journey-section-content">

              <span>WHAT I'M BUILDING</span>

              <h3>
                Learning by creating.
              </h3>

              <p>
                I don't want learning to stay inside a classroom.
                I want to turn ideas into websites, digital
                experiences, interactive concepts and experiments.
              </p>

            </div>

          </section>


          <div className="journey-divider"></div>


          {/* WHAT NEXT */}

          <section className="journey-section journey-next">

            <div className="journey-section-number">
              04
            </div>

            <div className="journey-section-content">

              <span>WHAT NEXT</span>

              <h3>
                There is still a long way to go.
              </h3>

              <p>
                The next part of the journey is about learning more,
                building better things, exploring technology and
                discovering where curiosity can take me.
              </p>

              <div className="journey-next-line">
                <span>CURIOUS</span>
                <span>CREATIVE</span>
                <span>EXPERIMENTAL</span>
                <span>ALWAYS BUILDING</span>
              </div>

            </div>

          </section>


          <div className="journey-ending">

            <span>THE JOURNEY CONTINUES</span>

            <p>
              Built from curiosity. Driven by creation.
            </p>

          </div>

        </div>

      </section>

    </main>
  )
}

export default JourneyWorld