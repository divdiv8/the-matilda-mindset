import coverArt from '../../assets/cover.png'
import { showLinks } from '../../static/data'
import styles from './Hero.module.css'
import { SpotifyIcon, AppleIcon, YoutubeIcon } from '../Icons/Icons'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.blob1} />
      <div className={styles.blob2} />
      <div className={styles.inner}>
        <div className={styles.textSide}>
          <p className={styles.tag}>✦ A weekly podcast</p>
          <h1 className={styles.title}>
            The Matilda<br />
            <em>Mindset</em>
          </h1>
          <p className={styles.tagline}>
            A weekly conversation about life, friendship, and figuring things out.
            Two friends, zero scripts, and a lot of feelings.
          </p>
          <div className={styles.listenOn}>
            <span className={styles.listenLabel}>Listen on</span>
            <div className={styles.platformBtns}>
              <a href={showLinks.spotify} target="_blank" rel="noopener noreferrer" className={`${styles.platformBtn} ${styles.spotify}`}>
                <SpotifyIcon /> Spotify
              </a>
              <a href={showLinks.apple} target="_blank" rel="noopener noreferrer" className={`${styles.platformBtn} ${styles.apple}`}>
                <AppleIcon /> Apple
              </a>
              <a href={showLinks.youtube} target="_blank" rel="noopener noreferrer" className={`${styles.platformBtn} ${styles.youtube}`}>
                <YoutubeIcon /> YouTube
              </a>
            </div>
          </div>
        </div>
        <div className={styles.artSide}>
          <div className={styles.artWrapper}>
            <img
              src={coverArt}
              alt="The Matilda Mindset podcast cover"
              className={styles.coverArt}
            />
            <div className={styles.floatTag}>New episode every week ✦</div>
          </div>
        </div>
      </div>
      <div className={styles.daisyRow}>
        {'✿ ✦ ✿ ✦ ✿ ✦ ✿ ✦ ✿ ✦ ✿ ✦ ✿ ✦ ✿ ✦ ✿'.split(' ').map((d, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>{d}</span>
        ))}
      </div>
    </section>
  )
}
