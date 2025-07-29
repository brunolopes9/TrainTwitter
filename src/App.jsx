import TextInput from "./components/TextInput"

function App() {
  return (
    <div>
      <TextInput placeholder={"What's Happening?"} maxLength={125} />
      <TextInput placeholder={"Tell me a new"} maxLength={125} />
      <TextInput placeholder={"Whats up guys"} maxLength={250} value={20} />
    </div>
  )
}

export default App
