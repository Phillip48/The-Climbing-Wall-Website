import { FEATURES } from '../constants'
import { useInView } from '../hooks/useInView'
import SectionLabel from './SectionLabel'
import styles from './Features.module.css'

export default function Features() {
  const [headRef, headInView] = useInView()
  const [gridRef, gridInView] = useInView()

  return (
    <section className={styles.section} id="features">
      <div className={styles.inner}>
        <div
          ref={headRef}
          className={`${styles.head} ${headInView ? styles.visible : ''}`}
        >
          <div>
            <SectionLabel>Features</SectionLabel>
            <h2 className={styles.heading}>EVERYTHING A<br />CLIMBER NEEDS</h2>
          </div>
          <p className={styles.headDesc}>
            No fluff. Just the tools you need to log your climbing, understand
            your progress, and keep pushing your grades.
          </p>
        </div>

        <div ref={gridRef} className={styles.grid}>
          {FEATURES.map(({ icon, title, desc }, i) => (
            <article
              key={title}
              className={`${styles.card} ${gridInView ? styles.cardVisible : ''}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className={styles.icon} aria-hidden="true">{icon}</div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDesc}>{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
