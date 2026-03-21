import { SCREENSHOTS } from '../constants'
import { useInView } from '../hooks/useInView'
import SectionLabel from './SectionLabel'
import styles from './Screenshots.module.css'

// Import screenshots as static assets (Vite handles these at build time)
import imgHome     from '../assets/screenshots/home.png'
import imgProjects from '../assets/screenshots/projects.png'
import imgSends    from '../assets/screenshots/sends.png'
import imgDiary    from '../assets/screenshots/diary.png'
import imgProfile  from '../assets/screenshots/profile.png'

const imgMap = {
  home:     imgHome,
  projects: imgProjects,
  sends:    imgSends,
  diary:    imgDiary,
  profile:  imgProfile,
}

export default function Screenshots() {
  const [ref, inView] = useInView()

  return (
    <section className={styles.section} id="screenshots">
      <div className={styles.inner}>
        <SectionLabel>The App</SectionLabel>
        <h2 className={styles.heading}>SEE IT IN ACTION</h2>

        <div ref={ref} className={styles.grid}>
          {SCREENSHOTS.map(({ src, alt, title, desc }, i) => (
            <div
              key={src}
              className={`${styles.item} ${inView ? styles.visible : ''}`}
              style={{
                transitionDelay: `${i * 0.1}s`,
                marginTop: i % 2 !== 0 ? '2.5rem' : '0',
              }}
            >
              <div className={styles.phone}>
                <img
                  src={imgMap[src]}
                  alt={alt}
                  className={styles.img}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className={styles.caption}>
                <h3 className={styles.captionTitle}>{title}</h3>
                <p className={styles.captionDesc}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
