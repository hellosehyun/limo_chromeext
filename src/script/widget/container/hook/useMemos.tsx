import { useState, useCallback } from 'react'
import { Memo } from '../slice/memo/memo'

export const useMemos = () => {
  const [memos, setMemos] = useState<JSX.Element[]>([])

  const createMemo = useCallback(() => {
    setMemos((prev) => {
      return [...prev, <Memo key={Date.now()} />]
    })
  }, [])

  return { memos, createMemo }
}
