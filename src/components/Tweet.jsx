import styles from "./Tweet.module.css"

export default function Tweet(props) {
  return (
    <div className={styles.tweetContainer}>
      <img
        className={styles.avatar}
        src={"https://github.com/brunolopes9.png"}
      />
      <div className={styles.user}>
        <span className={styles.userName}> Bruno Lopes </span>
        <span className={styles.userUserName}> @brunolopes</span>
        <span className={styles.date}> 12 Hours Ago</span>
      </div>
      <div className={styles.tweetText}> {props.children} </div>
    </div>
  )
}
