import { hosts } from '../../static/data'
import styles from './Hosts.module.css'

export default function Hosts() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.tag}>✦ Your hosts</span>
          <h2 className={styles.heading}>Two friends,<br /><em>one podcast</em></h2>
          <p className={styles.subtext}>
            We started The Matilda Mindset because we kept having the same long conversations
            over coffee and thought — maybe someone else needs to hear this too.
          </p>
        </div>

        <div className={styles.cards}>
          {hosts.map((host) => (
            <div key={host.name} className={styles.hostCard}>
              <div className={styles.emojiAvatar}>{host.emoji}</div>
              <div>
                <h3 className={styles.hostName}>{host.name}</h3>
                <p className={styles.hostBio}>{host.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* decorative quote */}
      <div className={styles.quoteBlock}>
        <span className={styles.quoteText}>
          "A weekly conversation about life, friendship, and figuring things out."
        </span>
      </div>
    </section>
  )
}
