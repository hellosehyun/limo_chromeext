import { useDetect } from './hook/useDetect'
import { useMemos } from './hook/useMemos'

export const Container = () => {
  const { memos, createMemo } = useMemos()

  useDetect({
    then: () => createMemo(),
  })

  return <>{memos}</>
}
