import { Button } from './ui/button'

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
            <Button>Inciar sesion</Button>
            <Button>Registro</Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
