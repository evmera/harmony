import { css } from '@styled-system/css'

export default function Button({ children, ...props }) {
  return (
    <button
      className={css({
        px: '6',
        py: '3',
        bg: 'blue.500',
        color: 'white',
        borderRadius: 'md',
      })}
      type="button"
      {...props}
    >
      {children}
    </button>
  )
}