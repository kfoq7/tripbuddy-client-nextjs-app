import Image from 'next/image'

interface Props {
  title: string
  thumbnail: string
}

export default function CardActiviy({ title, thumbnail }: Props) {
  return (
    <div className="w-[155px] cursor-pointer">
      <div className="h-40 flex flex-col items-center justify-center border-2 border-black rounded-md">
        <Image src={thumbnail} alt={title} width={75} height={75} />

        <span className="text-center text-base font-normal text-gray-700">
          {title}
        </span>
      </div>
    </div>
  )
}
