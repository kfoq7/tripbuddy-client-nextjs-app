'use client'

import { useState, useEffect } from 'react'

interface Options {
  steps: React.ReactElement[]
}

export function useMultistepsForm({ steps }: Options) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [isLastStep, setIsLastStep] = useState(false)

  const nextStep = () => {
    setCurrentStepIndex(prev => {
      if (prev >= steps.length - 1) {
        return prev
      }

      return prev + 1
    })
  }

  const previousStep = () => {
    setCurrentStepIndex(prev => {
      if (prev <= 0) {
        setIsLastStep(false)
        return prev
      }

      setIsLastStep(false)
      return prev - 1
    })
  }

  useEffect(() => {
    setIsLastStep(currentStepIndex === steps.length - 1)
  }, [currentStepIndex, steps])

  return {
    step: steps[currentStepIndex],
    isLastStep,
    nextStep,
    previousStep
  }
}
