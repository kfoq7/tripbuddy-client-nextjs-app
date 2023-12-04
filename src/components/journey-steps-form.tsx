'use client'

import { useRouter } from 'next/navigation'
import { Button } from './ui'
import { useMultistepsForm } from '@/hooks/useMultistepsForm'
import SelectTrip from './select-trip'
import SelectData from './select-data'
import SelectActivies from './select-activities'
import SelectDetails from './select-details'

export default function JourneyStepsForm() {
  const { push } = useRouter()
  const { step, isLastStep, nextStep, previousStep } = useMultistepsForm({
    steps: [
      <SelectTrip key="trip" />,
      <SelectData key="data" />,
      <SelectActivies key="activies" />,
      <SelectDetails key="details" />
    ]
  })

  const handleNextStep = () => {
    if (isLastStep) {
      push('/visualization-selection')
      return
    }

    nextStep()
  }

  return (
    <div className="h-screen flex flex-col items-center justify-between">
      <div className="pt-[190px]">
        <form>{step}</form>
      </div>

      <div className="mt-4 flex items-center justify-center gap-6 pb-[120px]">
        <Button className="w-[180px] text-xl" onClick={previousStep}>
          Atras
        </Button>
        <Button className="w-[180px] text-xl" onClick={handleNextStep}>
          Siguiente
        </Button>
      </div>
    </div>
  )
}
