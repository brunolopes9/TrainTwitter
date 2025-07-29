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
      <h1> TrainTweet </h1>
      <div>
        <img src={"https://github.com/brunolopes9.png"} alt=""></img>
        <TextInput
          placeholder={"What's going on?"}
          maxLength={maxLength}
          value={text}
          onChange={onTextChange}
        />
      </div>
      <div>
        <div>
          {text.length} / {maxLength}{" "}
        </div>
        <button onClick={sendTweet}> Send </button>
      </div>

      <ul>
        {tweetList.map((tweet) => {
          return <Tweet children={tweet} />
        })}
      </ul>
    </div>
  )
}
