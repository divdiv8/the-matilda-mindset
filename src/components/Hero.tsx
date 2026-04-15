import coverArt from '../assets/cover.png'
import { showLinks } from '../data'
import styles from './Hero.module.css'

const SpotifyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
)

const AppleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
)

const YoutubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

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
