import { useEffect } from 'react'

interface In {
  then: () => void
}

export const useDetect = ({ then }: In) => {
  const key = 'n'
  const delay = 500

  useEffect(() => {
    let cnt = 0
    let timer: NodeJS.Timeout | null = null

    const handleDoubleKeyPress = (e: KeyboardEvent) => {
      if (isTyping(e)) return

      if (e.key.toLowerCase() === key.toLowerCase()) {
        cnt++

        if (cnt === 1) {
          timer = setTimeout(() => {
            cnt = 0
          }, delay)
        }

        if (cnt === 2) {
          if (timer) clearTimeout(timer)
          cnt = 0

          then()
          e.preventDefault()
        }
      }
    }

    document.addEventListener('keydown', handleDoubleKeyPress)
    return () => {
      document.removeEventListener('keydown', handleDoubleKeyPress)
      if (timer) clearTimeout(timer)
    }
  }, [then])
}

const isTyping = (e: KeyboardEvent) => {
  return (
    e.target instanceof HTMLInputElement ||
    e.target instanceof HTMLTextAreaElement ||
    (e.target as HTMLElement).isContentEditable
  )
}
