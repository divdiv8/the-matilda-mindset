
import EpisodeCard from '../EpisodeCard/EpisodeCard'
import styles from './Episodes.module.css'
import { type HomePageProps } from '../../types/types'

export default function Episodes({ episodes, loading }: HomePageProps) {
    const [latest, ...rest] = episodes
return (
    !loading ?
    //not loading show this
    (<section id="episodes" className={styles.section}>
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
    </section>) :
    //loading then show this
    (<p className={styles.loading}> Loading .... </p>)
  )
}
