import Image from 'next/image'
import Link from 'next/link'
import { Title } from '@/components/ui'
import { ArrowRight } from '@/components/icons'

const LocalImage = ({ name }: { name: string }) => (
  <Image src={`/images/${name}.png`} alt={name} width={150} height={100} />
)

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="h-[500px] w-full bg-no-repeat bg-cover bg-center bg-[url(/images/bg-empieza-viaje.png)] flex flex-col items-center justify-center gap-4 font-bold text-center text-4xl text-white">
        <Link
          className="bg-sky-400 px-[58px] py-2 text-2xl text-center font-light tracking-normal rounded-md cursor-pointer hover:bg-sky-500"
          href="/start-journey"
        >
          <span className="pointer-events-none">Comienza tu viaje</span>
        </Link>
      </div>

      <section className="bg-white pt-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <Title className="text-xl">
            Crea el viaje de tus sueños en 5 sencillos pasos
          </Title>

          <div className="flex items-center justify-center gap-6 pt-8">
            <LocalImage name="paso1" />
            <ArrowRight />
            <LocalImage name="paso2" />
            <ArrowRight />
            <LocalImage name="paso3" />
            <ArrowRight />
            <LocalImage name="paso4" />
            <ArrowRight />
            <LocalImage name="paso5" />
          </div>
        </div>
      </section>
    </main>
  )
}
