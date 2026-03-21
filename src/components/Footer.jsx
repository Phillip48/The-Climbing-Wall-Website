import { APP_URL, GITHUB_URL } from '../constants'
import styles from './Footer.module.css'

export default function Footer({ onPrivacy }) {
  return (
    <footer className={styles.footer}>
      <a href="#" className={styles.logo}>
        <span className={styles.logoText}>The Climbing Wall</span>
      </a>

      <p className={styles.credit}>
        Built by{' '}
        <a href="https://github.com/Phillip48" target="_blank" rel="noopener noreferrer" className={styles.link}>
          Phillip Pereira
        </a>
      </p>

      <nav className={styles.links} aria-label="Footer navigation">
        <button className={styles.privacyBtn} onClick={onPrivacy}>
          Privacy Policy
        </button>
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className={styles.link}>
          GitHub ↗
        </a>
        <a href={APP_URL} target="_blank" rel="noopener noreferrer" className={styles.link}>
          Try the App ↗
        </a>
      </nav>
    </footer>
  )
}
