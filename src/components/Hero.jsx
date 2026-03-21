import { APP_URL } from '../constants'
import PhoneMockup from './PhoneMockup'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background effects */}
      <div className={styles.bgGlow}   aria-hidden="true" />
      <div className={styles.bgGrid}   aria-hidden="true" />

      <div className={styles.text}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} aria-hidden="true" />
          <span>Climbing Progress Tracker</span>
        </div>

        <h1 className={styles.heading}>
          TRACK<br />
          EVERY<br />
          <span className={styles.accent}>SEND.</span>
        </h1>

        <p className={styles.sub}>
          Log your projects, record your sends, and watch your grades climb.
          The Climbing Wall is your personal climbing journal — built for
          boulderers and top-ropers serious about progress.
        </p>

        <div className={styles.actions}>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnPrimary}
          >
            Try it Free →
          </a>
          <a href="#features" className={styles.btnGhost}>
            See Features
          </a>
        </div>

        <p className={styles.trust}>
          <span className={styles.trustCheck} aria-hidden="true">✓</span>
          Free to use &nbsp;·&nbsp; No account needed &nbsp;·&nbsp; Built by a climber
        </p>
      </div>

      <div className={styles.visual} aria-hidden="true">
        <PhoneMockup />
      </div>
    </section>
  )
}
