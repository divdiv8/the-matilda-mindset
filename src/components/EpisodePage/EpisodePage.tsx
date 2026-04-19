import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { useState } from 'react'
import { episodes } from '../../static/data'
import styles from './EpisodePage.module.css'
import { SpotifyIcon, AppleIcon, YoutubeIcon } from '../Icons/Icons'

export default function EpisodePage() {
  const { id } = useParams<{ id: string }>()
  const [transcriptOpen, setTranscriptOpen] = useState(false)

  const episode = episodes.find(e => e.id === id)

  if (!episode) {
    return (
      <div className={styles.notFound}>
        <p>Episode not found.</p>
        <Link to="/" className={styles.backLink}>← Back to all episodes</Link>
      </div>
    )
  }

  const youtubeEmbedId = episode.links.youtube
    ? new URL(episode.links.youtube).searchParams.get('v')
    : null

  return (
    <article className={styles.page}>
      <div className={styles.inner}>

        <Link to="/" className={styles.backLink}>← Back to all episodes</Link>

        <div className={styles.meta}>
          <span className={styles.epBadge}>EP. {episode.epNumber.toString().padStart(2, '0')}</span>
          <span className={styles.date}>{episode.date}</span>
        </div>

        <h1 className={styles.title}>{episode.title}</h1>

        <div className={styles.platformLinks}>
          <a href={episode.links.spotify} target="_blank" rel="noopener noreferrer" className={`${styles.platformBtn} ${styles.spotify}`}>
            <SpotifyIcon /> Spotify
          </a>
          <a href={episode.links.apple} target="_blank" rel="noopener noreferrer" className={`${styles.platformBtn} ${styles.apple}`}>
            <AppleIcon /> Apple
          </a>
          <a href={episode.links.youtube} target="_blank" rel="noopener noreferrer" className={`${styles.platformBtn} ${styles.youtube}`}>
            <YoutubeIcon /> YouTube
          </a>
        </div>

        {youtubeEmbedId && (
          <div className={styles.videoWrapper}>
            <iframe
              src={`https://www.youtube.com/embed/${youtubeEmbedId}`}
              title={episode.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        {episode.showNotes && (
          <div className={styles.showNotes}>
            <h2>Show notes</h2>
            <ReactMarkdown>{episode.showNotes}</ReactMarkdown>
          </div>
        )}

        {episode.transcript && (
          <div className={styles.transcript}>
            <button
              className={styles.transcriptToggle}
              onClick={() => setTranscriptOpen(o => !o)}
            >
              {transcriptOpen ? '▲ Hide transcript' : '▼ Show transcript'}
            </button>
            {transcriptOpen && (
              <div className={styles.transcriptBody}>
                <ReactMarkdown>{episode.transcript}</ReactMarkdown>
              </div>
            )}
          </div>
        )}

      </div>
    </article>
  )
}