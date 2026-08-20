function IdentityWorld({ onBack }) {
  return (
    <main className="identity-world">

      <button
        className="identity-back"
        onClick={onBack}
      >
        ← WORLD
      </button>

      <section className="identity-page">

        <div className="identity-heading">
          <span>01</span>
          <h1>IDENTITY</h1>
        </div>

        <div className="identity-card">

          <div className="identity-card-top">
            <div className="identity-symbol">
              A
            </div>

            <div>
              <h2>ATHMANADHAN</h2>
              <p>KING OF SOULS</p>
            </div>
          </div>


          <div className="identity-divider"></div>


          <div className="identity-details">

            <div className="identity-detail">
              <span>NAME</span>
              <strong>ATHMANADHAN S</strong>
            </div>

            <div className="identity-detail">
              <span>FROM</span>
              <strong>KANCHIPURAM, TAMIL NADU</strong>
            </div>

            <div className="identity-detail">
              <span>CURRENTLY</span>
              <strong>1st Year B.E. · COMPUTER SCIENCE & ENGINEERING</strong>
            </div>

            <div className="identity-detail">
              <span>INTERESTED IN</span>
              <strong>AI · CODING · TECHNOLOGY · DESIGN · CHESS</strong>
            </div>

          </div>


          <div className="identity-divider"></div>


          <div className="identity-card-bottom">

            <span>BUILT FROM CURIOSITY</span>

            <span>01 / 08</span>

          </div>

        </div>

      </section>

    </main>
  )
}

export default IdentityWorld