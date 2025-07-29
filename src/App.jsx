import styles from "./App.module.css"
import Index from "./components/pages/index"
import TextInput from "./components/TextInput"

function App() {
  return (
    <div className={styles.appContainer}>
      <Index />
    </div>
  )
}

export default App
