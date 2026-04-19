import { showLinks } from '../../static/data'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a href="#" className={styles.logo}>
        <span className={styles.logoScript}>The Matilda Mindset</span>
      </a>
      <div className={styles.links}>
        <a href="#episodes">Episodes</a>
        <a href="#about">Hosts</a>
        <a href={showLinks.youtube} target="_blank" rel="noopener noreferrer" className={styles.listenBtn}>
          Listen now
        </a>
      </div>
    </nav>
  )
}
