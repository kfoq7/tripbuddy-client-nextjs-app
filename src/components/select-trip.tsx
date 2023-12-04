import Image from 'next/image'

export default function SelectTrip() {
  return (
    <section className="flex items-center justify-center gap-10">
      <div className="w-[450px] h-[470px] lg:w-[475px] lg:h-[550px] p-4 flex flex-col items-center justify-center gap-6 rounded-md border-2 border-gray-400 drop-shadow-md cursor-pointer focus:border-sky-500">
        <Image
          src="/images/conozco-mi-destino.png"
          alt="conozco mi destino"
          width={250}
          height={250}
        />

        <h2 className="text-3xl lg:text-4xl text-center flex-wrap font-bold">
          CONOZCO MI DESTINO
        </h2>
      </div>

      <div className="w-[450px] h-[470px] lg:w-[475px] lg:h-[550px] p-4 flex flex-col items-center justify-center gap-6 rounded-md border-2 border-gray-400 drop-shadow-md cursor-pointer">
        <Image
          src="/images/quiero-recomendaciones.png"
          alt="quiero recomendaciones"
          width={250}
          height={250}
        />

        <h2 className="text-3xl lg:text-4xl text-center flex-wrap font-bold">
          CONOZCO MI DESTINO QUIERO RECOMENDACIONES
        </h2>
      </div>
    </section>
  )
}
