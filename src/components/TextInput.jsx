import styles from "./TextInput.module.css"

export default function TextInput({
  placeholder = "What's Happening",
  maxLength,
  ...props
}) {
  return (
    <div>
      <textarea
        className={styles.input}
        placeholder={placeholder}
        maxLength={maxLength}
        {...props}
      />
    </div>
  )
}
