import { episodes } from '../../static/data'
import EpisodeCard from '../EpisodeCard/EpisodeCard'
import styles from './Episodes.module.css'

export default function Episodes() {
  const [latest, ...rest] = episodes

  return (
    <section id="episodes" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.tag}>✦ All episodes</span>
          <h2 className={styles.heading}>Fresh conversations,<br /><em>every week</em></h2>
        </div>

        <div className={styles.grid}>
          {/* Featured latest episode */}
          <EpisodeCard episode={latest} featured />

          {/* Older episodes */}
          {rest.map((ep) => (
            <EpisodeCard key={ep.epNumber} episode={ep} />
          ))}
        </div>
      </div>
    </section>
  )
}
