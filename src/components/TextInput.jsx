export default function TextInput({ placeholder, maxLength, ...props }) {
  return (
    <div>
      <textarea placeholder={placeholder} maxLength={maxLength} {...props} />
    </div>
  )
}
