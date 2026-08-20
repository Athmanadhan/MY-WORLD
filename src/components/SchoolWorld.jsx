function SchoolWorld({ onBack }) {
  return (
    <main className="school-world">

      <button
        className="school-back"
        onClick={onBack}
      >
        ← CHAPTERS
      </button>


      {/* HERO */}

      <section className="school-hero">

        <span className="school-eyebrow">
          CHAPTER 03 · THE YEARS
        </span>

        <h1>SCHOOL</h1>

        <p>
          Where I grew, learned, and found
          important parts of my journey.
        </p>

      </section>


      {/* ARTICLE */}

      <article className="school-article">


        {/* 01 */}

        <section className="school-section">

          <span className="school-number">
            01
          </span>

          <div>

            <span className="school-label">
              THE BEGINNING
            </span>

            <h2>
              My School Journey
            </h2>

            <p>
              School was one of the earliest
              places where I began discovering
              the world outside my home.
            </p>

            <p>
              It was where learning, friendships,
              experiences, challenges, and
              everyday moments slowly became
              part of my story.
            </p>

          </div>

        </section>


        {/* PHOTO */}

        <section className="school-photo">

          <div className="school-photo-placeholder">

            <span>
              SCHOOL MEMORY
            </span>

            <small>
              Add your own picture later
            </small>

          </div>

        </section>


        {/* 02 */}

        <section className="school-section">

          <span className="school-number">
            02
          </span>

          <div>

            <span className="school-label">
              MY SCHOOL
            </span>

            <h2>
              SSKV
            </h2>

            <p>
              My school years were spent at
              SSKV Boys Matric Higher Secondary
              School in Kanchipuram.
            </p>

            <p>
              This became one of the major
              environments in which I grew up,
              learned, met people, and experienced
              different stages of childhood and
              adolescence.
            </p>

          </div>

        </section>


        {/* SCHOOL PHOTO */}

        <section className="school-photo school-photo-large">

          <div className="school-photo-placeholder">

            <span>
              SCHOOL · MEMORY
            </span>

            <small>
              Add your own picture later
            </small>

          </div>

        </section>


        {/* 03 */}

        <section className="school-section">

          <span className="school-number">
            03
          </span>

          <div>

            <span className="school-label">
              BEYOND BOOKS
            </span>

            <h2>
              The Classroom
            </h2>

            <p>
              School was never only about
              textbooks and examinations.
            </p>

            <p>
              It was also about learning how
              to interact with people, deal with
              challenges, discover interests,
              and understand myself a little more.
            </p>

            <p>
              Many of the experiences that seemed
              ordinary at the time became memories
              that I would later look back on.
            </p>

          </div>

        </section>


        {/* 04 */}

        <section className="school-section">

          <span className="school-number">
            04
          </span>

          <div>

            <span className="school-label">
              GROWING UP
            </span>

            <h2>
              The Years
            </h2>

            <p>
              As the years passed, school slowly
              changed from a place I simply went
              to every day into a major part of
              my growing-up years.
            </p>

            <p>
              Each stage brought something
              different — new subjects, new
              experiences, different challenges,
              and changes in the way I saw myself.
            </p>

          </div>

        </section>


        {/* PHOTO GRID */}

        <section className="school-gallery">

          <div className="school-photo-placeholder">
            <span>
              MEMORY 01
            </span>
          </div>

          <div className="school-photo-placeholder">
            <span>
              MEMORY 02
            </span>
          </div>

          <div className="school-photo-placeholder">
            <span>
              MEMORY 03
            </span>
          </div>

        </section>


        {/* 05 */}

        <section className="school-section">

          <span className="school-number">
            05
          </span>

          <div>

            <span className="school-label">
              LOOKING BACK
            </span>

            <h2>
              The Memories
            </h2>

            <p>
              When I look back at my school
              journey, I don't remember only
              lessons and exams.
            </p>

            <p>
              I remember the environment,
              the people, the ordinary days,
              the difficult days, and the small
              moments that slowly became memories.
            </p>

            <p>
              School became one of the chapters
              that helped shape the person I am
              continuing to become.
            </p>

          </div>

        </section>


        {/* ENDING */}

        <section className="school-ending">

          <span>
            CHAPTER 03
          </span>

          <h2>
            Some places
            <br />
            become part of your story.
          </h2>

          <p>
            School was one of mine.
          </p>

          <button onClick={onBack}>
            ← BACK TO CHAPTERS
          </button>

        </section>

      </article>

    </main>
  )
}

export default SchoolWorld