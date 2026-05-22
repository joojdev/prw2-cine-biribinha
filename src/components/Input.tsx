import type React from 'react'
import { useState, type ChangeEvent } from 'react'

function Input({
  label,
  value,
  setValue,
  validate,
}: {
  label: string
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  validate?: (value: string) => string | null
}) {
  const [touched, setTouched] = useState(false)
  const error = validate && touched ? validate(value) : null

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (!touched) {
      setTouched(true)
    }
    setValue(event.target.value)
  }

  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        value={value}
        onChange={handleChange}
        onBlur={() => setTouched(true)}
        required
        autoComplete="off"
      />
      {error && <span className="form-error">{error}</span>}
    </div>
  )
}

export default Input
