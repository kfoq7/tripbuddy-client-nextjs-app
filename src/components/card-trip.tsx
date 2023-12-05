import Image from 'next/image'

interface Props {
  name: string
  thumbnail: string
}

export default function Cardtrip({ name, thumbnail }: Props) {
  return (
    <div className=" bg-red-300">
      <div className="relative inline-block">
        <Image
          src={`/images/${thumbnail}.png`}
          alt={name}
          width={300}
          height={300}
        />
      </div>
    </div>
  )
}
