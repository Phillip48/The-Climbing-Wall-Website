import styles from './PhoneMockup.module.css'
import imgProfile from '../assets/screenshots/profile.png'

export default function PhoneMockup() {
  return (
    <div className={styles.wrap}>
      <div className={styles.phone}>
        <div className={styles.notch} />
        <img
          src={imgProfile}
          alt="The Climbing Wall app — Profile & Stats screen"
          className={styles.screenImg}
          draggable="false"
        />
      </div>
    </div>
  )
}
