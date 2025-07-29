import TextInput from "./components/TextInput"
import styles from "./App.module.css"

function App() {
  return (
    <div className={styles.appContainer}>
      <TextInput placeholder={"What's Happening?"} maxLength={125} />
    </div>
  )
}

export default App
