import clsx from 'clsx'
import { useState } from 'react'
import { Title } from './ui/title'
import { countWords, countCharatares } from '@/lib/utils'

export default function SelectDetails() {
  const [text, setText] = useState('')
  const [isWithLimit, setIsWithLimit] = useState(false)

  const wordsCount = countWords(text)

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value
    setIsWithLimit(wordsCount >= 255)
    setText(text)
  }

  return (
    <section className="flex flex-col gap-2 w-max">
      <Title>Por ultimo</Title>
      <p className="text-center">
        ¿Algun lugar especifico que quieras ver, restaurante que quieras visitar
        o cosas que quieras hacer?
      </p>

      <textarea
        className={clsx(
          'w-[1000px] h-[465px] p-3.5 text-base border-2 border-black rounded-md resize-none',
          {
            'border-red-500': isWithLimit
          }
        )}
        placeholder="Indicanos aquellas actividades o destinos que consideres indispensables en el viaje de tus sueños"
        onChange={handleChange}
      />

      <div className="flex items-center justify-center text-base font-light">
        {wordsCount} / 255 palabras
      </div>
    </section>
  )
}
