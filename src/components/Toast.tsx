function Toast({
  message,
  type,
  onDismiss,
}: {
  message: string
  type: 'error' | 'success'
  onDismiss: () => void
}) {
  return (
    <div className={`toast toast-${type}`} onClick={onDismiss}>
      <span>{message}</span>
    </div>
  )
}

export default Toast
