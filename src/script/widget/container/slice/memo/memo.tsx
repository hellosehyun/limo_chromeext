import React, { useState, useEffect } from 'react'

export const Memo = () => {
  const [pos, setPos] = useState({ x: 100, y: 100 })
  const [isDragging, setIsDragging] = useState(false)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const handleMouseDown = (e: any) => {
    if (e.target.classList.contains('memo-content')) return
    setIsDragging(true)
    setOffset({
      x: e.clientX - pos.x,
      y: e.clientY - pos.y,
    })
  }

  const handleMouseMove = (e: any) => {
    if (isDragging) {
      setPos({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
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
      style={{
        position: 'fixed',
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        zIndex: 10000,
        right: '50px',
        width: '200px',
        height: '200px',
        backgroundColor: 'white',
        border: '1px solid #ccc',
        borderRadius: '4px',
        padding: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
      id="memo-container"
      onMouseDown={handleMouseDown}
    >
      <button onClick={handleClose}>×</button>
      adasdadadadasdasd
    </div>
  )
}
