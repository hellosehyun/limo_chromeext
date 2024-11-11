import { RefObject, useEffect, useState } from 'react'

export const useDrag = (memoRef: RefObject<HTMLDivElement>) => {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const handleMouseDown = (e: MouseEvent) => {
    setIsDragging(true)
    setOffset({
      x: e.clientX - pos.x,
      y: e.clientY - pos.y,
    })
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return

    setPos({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    const curMemoRef = memoRef.current

    if (!curMemoRef) return

    curMemoRef.addEventListener('mousedown', handleMouseDown)
    curMemoRef.addEventListener('mousemove', handleMouseMove)
    curMemoRef.addEventListener('mouseup', handleMouseUp)
    return () => {
      curMemoRef.removeEventListener('mousedown', handleMouseDown)
      curMemoRef.removeEventListener('mousemove', handleMouseMove)
      curMemoRef.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging])

  return { pos }
}
