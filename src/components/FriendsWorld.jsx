function FriendsWorld({ onBack }) {
  return (
    <main className="friends-world">

      <button
        className="friends-back"
        onClick={onBack}
      >
        ← CHAPTERS
      </button>


      {/* HERO */}

      <section className="friends-hero">

        <span className="friends-eyebrow">
          CHAPTER 04 · THE PEOPLE
        </span>

        <h1>FRIENDS</h1>

        <p>
          The people who travelled through
          different chapters of my life.
        </p>

      </section>


      <article className="friends-article">


        {/* INTRO */}

        <section className="friends-section">

          <span className="friends-number">
            01
          </span>

          <div>

            <span className="friends-label">
              THE PEOPLE
            </span>

            <h2>
              More Than Friendship
            </h2>

            <p>
              Some people enter your life for a
              short period of time.
            </p>

            <p>
              Others stay through different stages,
              different schools, different versions
              of you, and different chapters of life.
            </p>

            <p>
              Sanjay and Thilak are two of those
              people in my story.
            </p>

          </div>

        </section>


        {/* SANJAY */}

        <section className="friends-section friends-feature">

          <span className="friends-number">
            02
          </span>

          <div>

            <span className="friends-label">
              CHILDHOOD → 12TH
            </span>

            <h2>
              Sanjay
            </h2>

            <p>
              Sanjay has been one of the longest
              friendships in my life.
            </p>

            <p>
              We became friends when we were
              young, and that friendship continued
              with me all the way through 12th grade.
            </p>

            <p>
              Growing up together meant that the
              friendship became part of many
              different stages of my life.
            </p>

            <p>
              Childhood memories, school years,
              ordinary days, and the changes that
              came with growing up all became part
              of the journey we shared.
            </p>

            <p className="friends-highlight">
              Some friends are remembered for
              a chapter. Some travel through
              the whole book.
            </p>

          </div>

        </section>


        {/* SANJAY PHOTO */}

        <section className="friends-photo friends-photo-large">

          <div className="friends-photo-placeholder">

            <span>
              SANJAY · MEMORY
            </span>

            <small>
              Add your own picture later
            </small>

          </div>

        </section>


        {/* SANJAY MEMORIES */}

        <section className="friends-section">

          <span className="friends-number">
            03
          </span>

          <div>

            <span className="friends-label">
              THE JOURNEY
            </span>

            <h2>
              Growing Up Together
            </h2>

            <p>
              A friendship that lasts for many
              years is made from countless small
              moments.
            </p>

            <p>
              Not every memory needs to be a huge
              event. Sometimes it is the everyday
              moments that become the ones you
              remember most.
            </p>

            <p>
              Sanjay became part of that long
              collection of memories for me.
            </p>

          </div>

        </section>


        {/* THILAK */}

        <section className="friends-section friends-feature">

          <span className="friends-number">
            04
          </span>

          <div>

            <span className="friends-label">
              6TH → 12TH
            </span>

            <h2>
              Thilak
            </h2>

            <p>
              Thilak became an important friend
              during my school years.
            </p>

            <p>
              We became friends around 6th grade,
              and that friendship continued all
              the way through 12th grade.
            </p>

            <p>
              Those years covered a major part
              of my school journey.
            </p>

            <p>
              From the classroom to everyday
              school life, Thilak became one of
              the people who shared that chapter
              with me.
            </p>

          </div>

        </section>


        {/* THILAK PHOTO */}

        <section className="friends-photo friends-photo-large">

          <div className="friends-photo-placeholder">

            <span>
              THILAK · MEMORY
            </span>

            <small>
              Add your own picture later
            </small>

          </div>

        </section>


        {/* BOTH */}

        <section className="friends-section">

          <span className="friends-number">
            05
          </span>

          <div>

            <span className="friends-label">
              TWO JOURNEYS
            </span>

            <h2>
              Different Beginnings.
              <br />
              Shared Years.
            </h2>

            <p>
              Sanjay and Thilak became important
              parts of different stages of my life.
            </p>

            <p>
              Sanjay was there from childhood,
              while Thilak became part of my story
              during my school years.
            </p>

            <p>
              Both friendships continued until
              12th grade.
            </p>

            <p>
              That makes them more than just names
              from my school memories.
            </p>

            <p className="friends-highlight">
              They are two of the best parts of
              my growing-up years.
            </p>

          </div>

        </section>


        {/* MEMORY GALLERY */}

        <section className="friends-gallery">

          <div className="friends-photo-placeholder">
            <span>MEMORY 01</span>
          </div>

          <div className="friends-photo-placeholder">
            <span>MEMORY 02</span>
          </div>

          <div className="friends-photo-placeholder">
            <span>MEMORY 03</span>
          </div>

        </section>


        {/* ENDING */}

        <section className="friends-ending">

          <span>
            CHAPTER 04
          </span>

          <h2>
            Some people
            <br />
            walk beside you.
          </h2>

          <p>
            Some become part of the journey itself.
          </p>

          <button onClick={onBack}>
            ← BACK TO CHAPTERS
          </button>

        </section>

      </article>

    </main>
  )
}

export default FriendsWorld