import { useState } from "react"

export function useIndex() {
  const [text, setText] = useState("")
  const maxLength = 125
  const [tweetList, setTweetList] = useState([])

  const tweet = {
    date: new Date().toISOString(),
    text: text,
    user: {
      name: "Bruno Lopes",
      username: "@brunolopes",
      picture: "https://github.com/brunolopes9.png",
    },
    likes: 0,
    liked: false,
  }

  function toggleLike(indexToToggle) {
    setTweetList((prev) =>
      prev.map((tweet, i) =>
        i === indexToToggle
          ? {
              ...tweet,
              liked: !tweet.liked,
              likes: tweet.liked ? tweet.likes - 1 : tweet.likes + 1,
            }
          : tweet
      )
    )
  }

  function onTextChange(event) {
    const text = event.target.value
    if (text.length <= maxLength) {
      setText(text)
    }
  }

  function sendTweet(event) {
    setTweetList([...tweetList, tweet])
    setText("")
  }

  function deleteTweet(indexToRemove) {
    setTweetList((prev) => prev.filter((_, i) => i !== indexToRemove))
  }

  return {
    text,
    onTextChange,
    maxLength,
    sendTweet,
    tweetList,
    deleteTweet,
    toggleLike,
  }
}
