import { useState } from "react"
import styles from "./TextInput.module.css"

export default function TextInput({
  placeholder = "What's Happening",
  maxLength,
  ...props
}) {
  const [tweetList, setTweetList] = useState([])

  function sendTweet(event) {
    setTweetList([...tweetList, text])
  }

  return (
    <div>
      <textarea
        className={styles.input}
        placeholder={placeholder}
        maxLength={maxLength}
        value={text}
        onChange={onTextChange}
        {...props}
      />
      <p>
        {text.length} / {maxLength}
      </p>
      <button onClick={sendTweet}>Enviar </button>
      {tweetList.map((tweet) => {
        return <p> {tweet}</p>
      })}
    </div>
  )
}
