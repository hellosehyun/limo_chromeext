import { useState, useCallback } from 'react'
import { Memo } from '../slice/memo/memo'

export const useMemos = () => {
  const [memos, setMemos] = useState<JSX.Element[]>([])

  const createMemo = useCallback(() => {
    console.log('Creating new memo...') // 디버깅용
    setMemos((prev) => {
      console.log('Previous memos:', prev) // 디버깅용
      return [...prev, <Memo key={Date.now()} />]
    })
  }, [])

  return { memos, createMemo }
}
