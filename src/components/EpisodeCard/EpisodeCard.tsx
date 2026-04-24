import type { Episode } from '../../types/types'
import styles from './EpisodeCard.module.css'
import { SpotifyIcon, AppleIcon, YoutubeIcon } from '../Icons/Icons'
import { Link } from 'react-router-dom'
interface Props {
  episode: Episode
  featured?: boolean
}

export default function EpisodeCard({ episode, featured = false }: Props) {
  return (
    <article className={`${styles.card} ${featured ? styles.featured : ''}`}>
      <div className={styles.epNum}>EP. {episode.epNumber.toString().padStart(2, '0')}</div>
      <Link to={`/episodes/${episode.id}`}>
        <h3 className={styles.title}>{episode.title}</h3>
      </Link>
      <p className={styles.date}>{episode.date}</p>
      <p className={styles.desc}>{episode.description}</p>
      <div className={styles.actions}>
        <a
          href={episode.links.spotify}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.playBtn}
        >
          <SpotifyIcon /> Play on Spotify
        </a>
        <a
          href={episode.links.apple}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.plainLink}
        >
          <AppleIcon /> 
        </a>
        <a
          href={episode.links.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.plainLink}
        >
          <YoutubeIcon /> 
        </a>
      </div>
    </article>
  )
}
