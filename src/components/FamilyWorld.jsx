function FamilyWorld({ onBack }) {
  return (
    <main className="family-world">

      <button
        className="family-back"
        onClick={onBack}
      >
        ← CHAPTERS
      </button>


      {/* HERO */}

      <section className="family-hero">

        <span className="family-eyebrow">
          CHAPTER 02 · THE PEOPLE
        </span>

        <h1>FAMILY</h1>

        <p>
          The people who became part of my story.
        </p>

      </section>


      {/* ARTICLE */}

      <article className="family-article">


        {/* INTRO */}

        <section className="family-section">

          <span className="family-number">
            01
          </span>

          <div>

            <span className="family-label">
              WHERE IT STARTS
            </span>

            <h2>
              More Than a Family
            </h2>

            <p>
              When I think about my life, family
              is one of the first things that comes
              to mind.
            </p>

            <p>
              Before friendships, school,
              interests, projects, and everything
              that came later, there were the
              people I grew up with.
            </p>

            <p>
              They became part of the foundation
              on which the rest of my story was
              built.
            </p>

          </div>

        </section>


        {/* FAMILY PHOTO */}

        <section className="family-photo">

          <div className="family-photo-placeholder">

            <span>
              FAMILY PHOTO
            </span>

            <small>
              Add your own image here later
            </small>

          </div>

        </section>


        {/* THENMOZHI */}

        <section className="family-section family-feature">

          <span className="family-number">
            02
          </span>

          <div>

            <span className="family-label">
              MY ELDER SISTER
            </span>

            <h2>
              Thenmozhi
            </h2>

            <p>
              Among all the people who have been
              part of my life, my elder sister
              Thenmozhi has a very special place.
            </p>

            <p>
              She was not simply my elder sister.
              During my childhood, she was my
              number-one favourite person in the
              world.
            </p>

            <p>
              For me, she was my world.
            </p>

          </div>

        </section>


        {/* THENMOZHI PHOTO */}

        <section className="family-photo family-photo-large">

          <div className="family-photo-placeholder">

            <span>
              THENMOZHI · MEMORY
            </span>

            <small>
              Add your own photo later
            </small>

          </div>

        </section>


        {/* HER PLACE */}

        <section className="family-section">

          <span className="family-number">
            03
          </span>

          <div>

            <span className="family-label">
              A SPECIAL BOND
            </span>

            <h2>
              A Part of Who I Am
            </h2>

            <p>
              Growing up with her gave me memories
              and experiences that I will always
              carry with me.
            </p>

            <p>
              Some relationships are difficult to
              explain in a few words because their
              importance comes from years of small
              moments rather than one particular
              event.
            </p>

            <p>
              That is what makes my bond with
              Thenmozhi special.
            </p>

            <p className="family-highlight">
              She is not just a part of my life.
              She is a part of who I am.
            </p>

          </div>

        </section>


        {/* MEMORY GALLERY */}

        <section className="family-gallery">

          <div className="family-photo-placeholder">
            <span>MEMORY 01</span>
          </div>

          <div className="family-photo-placeholder">
            <span>MEMORY 02</span>
          </div>

          <div className="family-photo-placeholder">
            <span>MEMORY 03</span>
          </div>

        </section>


        {/* FAMILY */}

        <section className="family-section">

          <span className="family-number">
            04
          </span>

          <div>

            <span className="family-label">
              HOME
            </span>

            <h2>
              The Foundation
            </h2>

            <p>
              Family became part of the background
              of every other chapter of my life.
            </p>

            <p>
              As I grew older, life changed.
              Interests changed. School changed.
              My ambitions changed.
            </p>

            <p>
              But the importance of the people
              who were there from the beginning
              remained.
            </p>

          </div>

        </section>


        {/* ENDING */}

        <section className="family-ending">

          <span>
            CHAPTER 02
          </span>

          <h2>
            Some people
            <br />
            become part of your story.
          </h2>

          <p>
            Some become part of who you are.
          </p>

          <button onClick={onBack}>
            ← BACK TO CHAPTERS
          </button>

        </section>


      </article>

    </main>
  )
}

export default FamilyWorld