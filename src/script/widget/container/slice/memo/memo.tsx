import { useRef } from 'react'
import { useDrag } from './hook/useDrag'
import css from './style.module.css'

export const Memo = () => {
  const memoRef = useRef<HTMLDivElement>(null)

  const { pos } = useDrag(memoRef)

  return (
    <div
      ref={memoRef}
      className={css.memo}
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
      }}
    >
      adasdadadadasdasd
    </div>
  )
}
