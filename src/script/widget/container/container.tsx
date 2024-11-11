import { usePressDouble } from './hook/usePressDouble'
import { useMemos } from './hook/useMemos'

export const Container = () => {
  const { memos, createMemo } = useMemos()

  usePressDouble({
    key: 'n',
    then: () => createMemo(),
  })

  return <>{memos}</>
}
