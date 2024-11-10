import React, { useState, useEffect } from 'react'

export const Memo = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })

  const handleMouseDown = (e: any) => {
    if (e.target.classList.contains('memo-content')) return
    setIsDragging(true)
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    })
  }

  const handleMouseMove = (e: any) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y,
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging])

  const handleClose = () => {
    const memoElement = document.getElementById('memo-container')
    if (memoElement) {
      memoElement.remove()
    }
  }

  return (
    <div
      id="memo-container"
      style={{ left: `${position.x}px`, top: `${position.y}px`, zIndex: 10000 }}
      onMouseDown={handleMouseDown}
    >
      <button onClick={handleClose}>×</button>
      adasdadadadasdasd
    </div>
  )
}
