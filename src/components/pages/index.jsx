import TextInput from "../TextInput"
import { useState } from "react"
import Tweet from "../Tweet"

export default function Index() {
  const [text, setText] = useState("")
  const maxLength = 125
  const [tweetList, setTweetList] = useState([])

  function onTextChange(event) {
    const text = event.target.value
    if (text.length <= maxLength) {
      setText(text)
    }
  }

  function sendTweet(event) {
    setTweetList([...tweetList, text])
  }

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
        <button onClick={sendTweet} className={styles.postButton}>
          {" "}
          Tweet{" "}
        </button>
      </div>

      <ul>
        {tweetList.map((tweet) => {
          return (
            <li>
              <Tweet children={tweet} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
