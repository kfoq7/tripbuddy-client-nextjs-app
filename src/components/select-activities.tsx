import CardActiviy from './card-activity'
import { Title } from './ui/title'
import { activies, categories } from '@/lib/data'

export default function SelectActivies() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center pb-10">
        <Title className="text-2xl">
          Selecciona la categoria que mejor describa tu viaje
        </Title>

        <div className="pt-6 pb-3 flex gap-8">
          {categories.map(({ title, thumbnail }) => (
            <CardActiviy key={title} title={title} thumbnail={thumbnail} />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center pb-10">
        <Title className="text-2xl">
          Selecciona el tipo de actividades que te interesa realizar
        </Title>

        <div className="pt-6 pb-3 flex gap-8">
          {activies.map(({ title, thumbnail }) => (
            <CardActiviy key={title} title={title} thumbnail={thumbnail} />
          ))}
        </div>
      </div>
    </section>
  )
}
