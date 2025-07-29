import styles from "./TextInput.module.css"

export default function TextInput({
  placeholder = "What's Happening",
  maxLength,
  ...props
}) {
  const [contador, setContador] = useState(0)

  return (
    <div>
      <textarea
        className={styles.input}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={onTextChange}
        {...props}
      />
      <p>
        {contador} / {maxLength}
      </p>
    </div>
  )
}
