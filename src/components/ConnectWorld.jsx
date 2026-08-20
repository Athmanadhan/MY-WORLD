function ConnectWorld({ onBack }) {
  const connections = [
    {
      icon: '◎',
      label: 'INSTAGRAM',
      description: 'Follow my visual world',
      href: 'https://www.instagram.com/king_of_souls_03/',
      external: true,
    },
    {
      icon: 'in',
      label: 'LINKEDIN',
      description: 'Connect professionally',
      href: 'https://www.linkedin.com/in/athma-nadhan-767157429',
      external: true,
    },
    {
      icon: '◇',
      label: 'GITHUB',
      description: 'Explore what I build',
      href: 'https://github.com/Athmanadhan',
      external: true,
    },
    {
      icon: '✉',
      label: 'EMAIL',
      description: 'Send me a message',
      href: 'mailto:athmasankar2009@gmail.com',
      external: false,
    },
    {
      icon: '☎',
      label: 'MOBILE',
      description: 'Get in touch',
      href: 'tel:7639473832',
      external: false,
    },
  ]

  return (
    <main className="connect-world">

      <button
        className="connect-back"
        onClick={onBack}
      >
        ← KING OF SOULS
      </button>


      <section className="connect-hero">

        <span className="connect-eyebrow">
          WORLD 06 · STAY IN TOUCH
        </span>

        <h1>CONNECT</h1>

        <p>
          Different places. One world.
        </p>

      </section>


      <section className="connect-grid">

        {connections.map((item) => (
          <a
            key={item.label}
            className="connect-card"
            href={item.href}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noopener noreferrer' : undefined}
          >

            <div className="connect-icon">
              {item.icon}
            </div>

            <div className="connect-card-content">

              <span className="connect-label">
                {item.label}
              </span>

              <p>
                {item.description}
              </p>

            </div>

            <span className="connect-arrow">
              ↗
            </span>

          </a>
        ))}

      </section>


      <section className="connect-ending">

        <span>
          ATHMANADHAN
        </span>

        <h2>
          THE WORLD DOESN'T END HERE.
        </h2>

        <p>
          There is always another idea,
          another project, another beginning.
        </p>

      </section>

    </main>
  )
}

export default ConnectWorld