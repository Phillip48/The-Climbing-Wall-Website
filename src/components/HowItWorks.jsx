import { STEPS } from '../constants'
import { useInView } from '../hooks/useInView'
import SectionLabel from './SectionLabel'
import styles from './HowItWorks.module.css'

export default function HowItWorks() {
  const [ref, inView] = useInView()

  return (
    <section className={styles.section} id="how">
      <div className={styles.inner}>
        <SectionLabel>How it works</SectionLabel>
        <h2 className={styles.heading}>FROM PROJECT TO SEND</h2>

        <div ref={ref} className={styles.steps}>
          {STEPS.map(({ num, tag, title, desc }, i) => (
            <article
              key={num}
              className={`${styles.step} ${inView ? styles.visible : ''}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <span className={styles.num} aria-hidden="true">{num}</span>
              <span className={styles.tag}>{tag}</span>
              <h3 className={styles.stepTitle}>{title}</h3>
              <p className={styles.stepDesc}>{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
