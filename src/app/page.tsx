import Image from 'next/image'
import Link from 'next/link'
import { Title } from '@/components/ui'
import { ArrowRight } from '@/components/icons'
import Cardtrip from '@/components/card-trip'
import Footer from '@/components/footer'
import { trips } from '@/lib/data'

const LocalImage = ({ name }: { name: string }) => (
  <Image src={`/images/${name}.png`} alt={name} width={150} height={100} />
)

export default function Home() {
  return (
    <main className="min-h-screen pt-[95px]">
      <div className="h-[500px] w-full bg-no-repeat bg-cover bg-center bg-[url(/images/bg-empieza-viaje.png)] flex flex-col items-center justify-center gap-4 font-bold text-center text-4xl text-white">
        <Title className="text-white text-3xl">
          Unete a nuestra comidad y planea tu viaje a la medida
        </Title>
        <Link
          className="bg-sky-400 px-[58px] py-2 text-2xl text-center font-light tracking-normal rounded-md cursor-pointer hover:bg-sky-500"
          href="/start-journey"
        >
          <span className="pointer-events-none">Comienza tu viaje</span>
        </Link>
      </div>

      <section className="bg-white my-20 pb-8">
        <div className="max-w-7xl mx-auto">
          <Title>Crea el viaje de tus sueños en 5 sencillos pasos</Title>

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

      <section className="bg-gray-50 pt-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center">
            <Title className="text-gray-700 text-3xl font-bold">
              Viajes de otro usuarios
            </Title>

            <div className="max-w-4xl mx-auto mt-5 mb-16">
              <div className="flex items-center justify-center gap-3 pt-6">
                {trips.map(({ id, name, image, title }) => (
                  <Cardtrip
                    key={id}
                    name={name}
                    thumbnail={image}
                    title={title}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
