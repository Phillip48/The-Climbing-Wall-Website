import { APP_URL, GITHUB_URL } from '../constants'
import { useInView } from '../hooks/useInView'
import SectionLabel from './SectionLabel'
import styles from './CTA.module.css'

export default function CTA() {
  const [ref, inView] = useInView()

  return (
    <section className={styles.section}>
      <div
        ref={ref}
        className={`${styles.inner} ${inView ? styles.visible : ''}`}
      >
        <SectionLabel center>Get Started</SectionLabel>
        <h2 className={styles.heading}>
          READY TO TRACK<br />YOUR NEXT SEND?
        </h2>
        <p className={styles.desc}>
          Try The Climbing Wall App free — no account needed to explore.
        </p>
        <div className={styles.actions}>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnPrimary}
          >
            Try the App →
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnGhost}
          >
            View on GitHub
          </a>
        </div>
      </div>
      <div className={styles.glow} aria-hidden="true" />
    </section>
  )
}
