import { useDetect } from './hook/useDetect'
import { useMemos } from './hook/useMemos'
import css from './style.module.css'

export const Container = () => {
  const { memos, createMemo } = useMemos()

  useDetect({
    then: () => createMemo(),
  })

  return <div className={css.container}>{memos}</div>
}
