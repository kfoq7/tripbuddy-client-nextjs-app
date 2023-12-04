import Image from 'next/image'
import Link from 'next/link'
import { Title } from '@/components/ui/title'
import { recolatedData } from '@/lib/data'
import { Button } from '@/components/ui/button'

export default function VisualiztionSelection() {
  const { description } = recolatedData

  return (
    <main className="min-h-screen pt-28 pb-4">
      <Title>Visualiza tu eleccion</Title>

      <div className="h-[560px] w-full bg-no-repeat bg-cover bg-center bg-[url(/images/banner-interno.png)] mt-5 flex flex-col items-center justify-center">
        <div className="text-center text-4xl text-white font-semibold flex flex-col gap-6">
          <Title className="!text-5xl">12 dias en Peru</Title>

          <div className="flex items-center justify-center gap-5">
            <p>Abril 15, 2021 - Abril 26, 2021</p>

            <Link
              href="/start-journey"
              className="bg-sky-500 text-2xl py-2 px-4 rounded-full"
            >
              Edit
            </Link>
          </div>
        </div>
      </div>

      <section className="mx-auto mt-10 max-w-7xl py-4 px-14 border-2 border-gray-300 rounded-md text-4xl">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start">
            <Title className="pb-10">Resumen de viaje</Title>

            <div>
              <Title className="text-[1.65rem] text-left">Destinos</Title>
              {/* {des} */}
            </div>
            <div>
              <Title className="text-[1.65rem]">Viajeros</Title>
            </div>
            <div>
              <Title className="text-[1.65rem]">Presupuesto por persona</Title>
            </div>
            <div>
              <Title className="text-[1.65rem]">Alojamiento</Title>
            </div>
            <div>
              <Title className="text-[1.65rem]">Categoria de viaje</Title>
            </div>
            <div>
              <Title className="text-[1.65rem]">Actividades</Title>
            </div>
            <div>
              <Title className="text-[1.65rem] !text-left">Por ultimo</Title>
              <p className="text-base w-[575px]">{description}</p>
            </div>
          </div>

          <Image
            src="/images/img-mapa.png"
            alt="mapa"
            width={400}
            height={300}
            priority
          />
        </div>
      </section>

      <div className="pt-5 flex items-center justify-center gap-6">
        <Button className="w-[180px] text-xl">Atras</Button>
        <Button className="w-[180px] text-xl">Siguiente</Button>
      </div>
    </main>
  )
}
