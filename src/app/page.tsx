import Link from 'next/link'

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
    </main>
  )
}
