import { formatDistanceToNow } from "date-fns"
import { enUS } from "date-fns/locale"
import styles from "./Tweet.module.css"
import { useEffect, useState } from "react"

export default function Tweet({ tweet, index, onDelete, onToggleLike }) {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date())
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  const publishedToNew = formatDistanceToNow(new Date(tweet.date), {
    locale: enUS,
    addSuffix: true,
  })

  return (
    <div className={styles.tweetContainer}>
      <img className={styles.avatar} src={tweet.user.picture} />
      <div className={styles.user}>
        <span className={styles.userName}> {tweet.user.name} </span>
        <span className={styles.userUserName}> {tweet.user.username}</span>
        <span
          className={styles.date}
          title={new Date(tweet.date).toLocaleString("en-US", {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        >
          - {publishedToNew}
        </span>
      </div>
      <div className={styles.tweetText}> {tweet.text} </div>
      <button className={styles.deleteButton} onClick={() => onDelete(index)}>
        ❌
      </button>
      <button
        className={`${styles.likeButton} ${tweet.liked ? styles.liked : ""}`}
        onClick={() => onToggleLike(index)}
      >
        {tweet.liked ? "❤️" : "🤍"} {tweet.likes}
      </button>{" "}
    </div>
  )
}
