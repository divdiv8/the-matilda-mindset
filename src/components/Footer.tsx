import { showLinks } from '../data'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logo}>The Matilda Mindset</span>
          <p className={styles.sub}>A weekly podcast about life, friendship,<br />and figuring things out.</p>
        </div>

        <div className={styles.links}>
          <p className={styles.linksLabel}>Listen</p>
          <a href={showLinks.spotify} target="_blank" rel="noopener noreferrer">Spotify ↗</a>
          <a href={showLinks.apple} target="_blank" rel="noopener noreferrer">Apple Podcasts ↗</a>
          <a href={showLinks.youtube} target="_blank" rel="noopener noreferrer">YouTube ↗</a>
        </div>

        <div className={styles.links}>
          <p className={styles.linksLabel}>Navigate</p>
          <a href="#episodes">Episodes</a>
          <a href="#about">Hosts</a>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© 2026 The Matilda Mindset</span>
        <span className={styles.heart}>made with ✿</span>
      </div>
    </footer>
  )
}
