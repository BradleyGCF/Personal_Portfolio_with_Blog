"use client"

import { useEffect, useState } from "react"

interface FloatingElement {
  id: number
  size: number
  top: number
  left: number
  opacity: number
  animationDelay: number
  animationClass: string
  color: string
}

export default function FloatingBackground() {
  const [elements, setElements] = useState<FloatingElement[]>([])

  useEffect(() => {
    const colors = ["bg-primary/5", "bg-primary/10", "bg-secondary/10", "bg-accent/10", "bg-muted/15"]

    const animationClasses = ["float-slow", "float-medium", "float-fast"]

    const newElements: FloatingElement[] = []

    // Create 15 floating elements
    for (let i = 0; i < 15; i++) {
      newElements.push({
        id: i,
        size: Math.random() * 100 + 50, // 50-150px
        top: Math.random() * 100, // 0-100%
        left: Math.random() * 100, // 0-100%
        opacity: Math.random() * 0.3 + 0.1, // 0.1-0.4
        animationDelay: Math.random() * 5, // 0-5s
        animationClass: animationClasses[Math.floor(Math.random() * animationClasses.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    setElements(newElements)
  }, [])

  const getFloatWidth = (size: number) => {
    if (size < 80) return 'float-w-50'
    if (size < 120) return 'float-w-100'
    return 'float-w-150'
  }

  const getFloatDelay = (delay: number) => `float-delay-${Math.floor(delay)}`
  const getFloatOpacity = (opacity: number) => `float-opacity-${Math.floor(opacity * 100 / 10) * 10}`

  const getFloatPosition = (value: number) => {
    const rounded = Math.round(value / 25) * 25
    return {
      top: `float-top-${rounded}`,
      left: `float-left-${rounded}`
    }
  }

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
      {elements.map((element) => {
        const topPosition = getFloatPosition(element.top)
        return (
          <div
            key={element.id}
            className={`float-element ${element.color} ${element.animationClass} 
              ${getFloatWidth(element.size)} ${getFloatDelay(element.animationDelay)} ${getFloatOpacity(element.opacity)}
              ${topPosition.top} ${getFloatPosition(element.left).left}`}
          />
        )
      })}
    </div>
  )
}

