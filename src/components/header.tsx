import Link from 'next/link'
import { Button } from './ui'

export default function Header() {
  return (
    <header className="w-full fixed py-[20px] border-b-4 border-b-sky-500 rounded-sm bg-white z-10">
      <div className="mx-auto max-w-7xl">
        <nav className="flex items-center justify-between">
          <a href="/" className="group">
            <h2 className="font-bold tracking-tighter py-2 text-3xl">
              TRIP BUDDY
            </h2>
          </a>
          <div className="flex items-center gap-4">
            <Button>Iniciar sesion</Button>
            <Link
              href="/register"
              className="w-36 px-5 py-2 bg-sky-400 rounded-md text-white text-center tracking-normal hover:bg-sky-500"
            >
              Registro
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
