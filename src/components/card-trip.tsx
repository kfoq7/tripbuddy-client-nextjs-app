import Image from 'next/image'
import { Title } from './ui'

interface Props {
  name: string
  thumbnail: string
  title: string
}

export default function Cardtrip({ title, name, thumbnail }: Props) {
  return (
    <div className="bg-gray-100 rounded-md shadow-lg">
      <div className="relative inline-block">
        <Image
          src={`/images/${thumbnail}.png`}
          alt={name}
          width={300}
          height={300}
          className="rounded-t-md"
        />
      </div>

      <div className="w-full px-2 py-3.5">
        <Title className="text-xl">{title}</Title>
      </div>
    </div>
  )
}
