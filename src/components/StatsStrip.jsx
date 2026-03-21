import { STATS } from '../constants'
import { useInView } from '../hooks/useInView'
import styles from './StatsStrip.module.css'

export default function StatsStrip() {
  const [ref, inView] = useInView()

  return (
    <div ref={ref} className={styles.strip}>
      {STATS.map(({ num, desc }, i) => (
        <div
          key={desc}
          className={`${styles.stat} ${inView ? styles.visible : ''}`}
          style={{ transitionDelay: `${i * 0.1}s` }}
        >
          <span className={styles.num}>{num}</span>
          <span className={styles.desc}>{desc}</span>
        </div>
      ))}
    </div>
  )
}
