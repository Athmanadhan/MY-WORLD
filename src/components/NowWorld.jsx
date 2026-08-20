function NowWorld({ onBack }) {
  return (
    <main className="now-world">

      <button
        className="now-back"
        onClick={onBack}
      >
        ← CHAPTERS
      </button>


      <section className="now-hero">

        <span>
          CHAPTER 07 · THE PRESENT
        </span>

        <h1>NOW</h1>

        <p>
          Where I am now.
        </p>

      </section>


      <article className="now-article">


        <section className="now-section">

          <span>01</span>

          <div>

            <small>
              CURRENT CHAPTER
            </small>

            <h2>
              Where I Am Now
            </h2>

            <p>
              This is the chapter of the present —
              the stage of life I am currently living,
              learning, exploring, and building.
            </p>

            <p>
              It is not a finished story.
              It is a chapter that is still being written.
            </p>

          </div>

        </section>


        <section className="now-section">

          <span>02</span>

          <div>

            <small>
              EDUCATION
            </small>

            <h2>
              Learning Computer Science
            </h2>

            <p>
              I am currently pursuing my 1st B.E. in
              Computer Science and Engineering at
              Sri Venkateswara College of Engineering.
            </p>

          </div>

        </section>


        <section className="now-section">

          <span>03</span>

          <div>

            <small>
              WHAT I'M LEARNING
            </small>

            <h2>
              Understanding More
            </h2>

            <p>
              My current interests include coding,
              AI, technology, design, chess,
              and creative projects.
            </p>

            <p>
              I am still discovering how these
              different interests can connect
              with each other.
            </p>

          </div>

        </section>


        <section className="now-section">

          <span>04</span>

          <div>

            <small>
              WHAT I'M BUILDING
            </small>

            <h2>
              Turning Ideas Into Things
            </h2>

            <p>
              I continue to build websites,
              digital experiences, interactive
              concepts, and experimental projects.
            </p>


            <div className="now-image-placeholder">

              <span>
                ADD CURRENT PROJECT IMAGE LATER
              </span>

            </div>

          </div>

        </section>


        <section className="now-section">

          <span>05</span>

          <div>

            <small>
              WHAT I'M EXPLORING
            </small>

            <h2>
              Curiosity in Motion
            </h2>

            <p>
              Technology, AI, design, chess,
              creativity, and experimentation
              continue to shape what I explore.
            </p>

            <p>
              Some ideas become projects.
              Some become experiments.
              Some simply lead to the next idea.
            </p>

          </div>

        </section>


        <section className="now-section">

          <span>06</span>

          <div>

            <small>
              THE PERSON I'M BECOMING
            </small>

            <h2>
              Still Becoming
            </h2>

            <p>
              I am still learning what I want
              to create, what I want to understand,
              and where I want to take my abilities.
            </p>

            <p>
              There is no final version of
              this chapter yet.
            </p>

          </div>

        </section>


        <section className="now-section">

          <span>07</span>

          <div>

            <small>
              CURRENT MOMENT
            </small>

            <h2>
              Still Building
            </h2>

            <p>
              This is where I am right now.
            </p>

            <p className="now-highlight">
              Curious. Creative. Experimental.
              Always building.
            </p>

          </div>

        </section>


        <section className="now-ending">

          <small>
            THE JOURNEY CONTINUES
          </small>

          <h2>
            This is where I am.
            <br />
            But the story keeps moving.
          </h2>

          <p>
            Built from curiosity. Driven by creation.
          </p>

          <button onClick={onBack}>
            ← BACK TO CHAPTERS
          </button>

        </section>


      </article>

    </main>
  )
}

export default NowWorld