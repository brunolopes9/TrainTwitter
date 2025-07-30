import TextInput from "../TextInput"
import Tweet from "../Tweet"
import styles from "./Index.module.css"
import { useIndex } from "../../hooks/useIndex.page"

export default function Index() {
  const {
    text,
    onTextChange,
    maxLength,
    sendTweet,
    tweetList,
    deleteTweet,
    toggleLike,
  } = useIndex()

  return (
    <div>
      <h1 className={styles.pageTitle}> TrainTweet </h1>

      <div className={styles.tweetContainer}>
        <img
          src={"https://github.com/brunolopes9.png"}
          className={styles.avatar}
        />
        <TextInput
          placeholder={"What's going on?"}
          rows={3}
          maxLength={maxLength}
          value={text}
          onChange={onTextChange}
        />
      </div>
      <div className={styles.buttonContainer}>
        <div>
          {text.length} / {maxLength}
        </div>
        <button
          onClick={sendTweet}
          className={styles.postButton}
          disabled={text.length === 0}
        >
          Tweet
        </button>
      </div>

      <ul className={styles.tweetList}>
        {tweetList.map((tweet, index) => (
          <li key={index} className={styles.tweetListItem}>
            <Tweet
              tweet={tweet}
              index={index}
              onDelete={deleteTweet}
              onToggleLike={toggleLike}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
