export default function Tweet(props) {
  return (
    <div className={styles.tweetContainer}>
      <img src={"https://github.com/brunolopes9.png"} />
      <div className={styles.user}>
        <span> Bruno Lopes </span>
        <span> @brunolopes</span>
        <span> 12 Hours Ago</span>
      </div>
      <div className={styles.tweetText}> {props.children} </div>
    </div>
  )
}
