import { useEffect } from 'react'

interface In {
  key: string
  then: () => void
  delay?: number
}

export const usePressDouble = ({ key, then, delay = 500 }: In) => {
  useEffect(() => {
    let cnt = 0
    let timer: NodeJS.Timeout | null = null

    const handleDoubleKeyPress = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        (e.target as HTMLElement).isContentEditable
      )
        return

      if (e.key.toLowerCase() === key.toLowerCase()) {
        cnt++

        if (cnt === 1) {
          timer = setTimeout(() => {
            cnt = 0
          }, delay)
        }

        if (cnt === 2) {
          then()

          if (timer) clearTimeout(timer)
          cnt = 0

          e.preventDefault()
        }
      }
    }

    document.addEventListener('keydown', handleDoubleKeyPress)
    return () => {
      document.removeEventListener('keydown', handleDoubleKeyPress)
      if (timer) clearTimeout(timer)
    }
  }, [key, then, delay])
}
