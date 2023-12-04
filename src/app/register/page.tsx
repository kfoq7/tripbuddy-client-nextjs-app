import Image from 'next/image'
import { Title, Separator } from '@/components/ui'

export default function Register() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-[550px] h-96 border-2 border-gray-800 rounded-lg">
        <div className="px-4 py-2 flex flex-col items-center justify-center">
          <Title className="pt-3 pb-5">Registrate y...</Title>
          <div className="flex items-center justify-between text-xs text-center">
            <div>
              <Image
                src="/images/icon-viajes.png"
                alt="viajes"
                width={100}
                height={100}
              />
              <p>Accede a tu viaje desde cualquier dispositivo</p>
            </div>
            <div>
              <Image
                src="/images/icon-viajes.png"
                alt="viajes"
                width={100}
                height={100}
              />
              <p>Accede a tu viaje desde cualquier dispositivo</p>
            </div>
            <div>
              <Image
                src="/images/icon-viajes.png"
                alt="viajes"
                width={100}
                height={100}
              />
              <p>Accede a tu viaje desde cualquier dispositivo</p>
            </div>
          </div>
          <Separator />
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <div className="w-72 border-2 border-gray-800 rounded-full py-2 px-3 cursor-pointer">
              <span>Iniciar sesion con Facebook</span>
            </div>
            <div className="w-72 border-2 border-gray-800 rounded-full py-2 px-3 cursor-pointer">
              <span>Iniciar sesion con Google</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
