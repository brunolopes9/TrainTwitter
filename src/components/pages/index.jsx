import TextInput from "../TextInput"

export default function Index() {
  const [text, setText] = useState("")

  function onTextChange(event) {
    const text = event.target.value
    if (text.length <= maxLength) {
      setText(text)
    }
  }

  return (
    <div>
      <h1> TrainTweet </h1>
      <div>
        <img src={"https://github.com/brunolopes9.png"} alt=""></img>
        <TextInput />
      </div>
      <div>
        <div>0/125</div>
        <button>Send Tweet</button>
      </div>
      <ul>
        <li> Tweet 1 </li>
        <li> Tweet 2 </li>
      </ul>
    </div>
  )
}
