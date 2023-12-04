import clsx from 'clsx'
import { Title } from '@/components/ui/title'
import NoQuotes from '@/components/no-quotes'
import { Button } from '@/components/ui/button'

const quotesList: unknown[] = []

export default function Quotes() {
  const isEmpty = quotesList.length === 0

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <Title className="pb-20">Cotizacion abiertas</Title>

      <div className="relative h-[550px] overflow-x-auto shadow-md sm:rounded-lg">
        <table
          className={clsx(
            'w-[1100px] text-sm text-left rtl:text-right text-gray-500',
            {
              'h-[550px]': isEmpty
            }
          )}
        >
          <thead className="text-xs text-gray-100 text-center font-normal uppercase bg-sky-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Destino
              </th>
              <th scope="col" className="px-6 py-3">
                Agencia
              </th>
              <th scope="col" className="px-6 py-3">
                Tipo de experencia
              </th>
              <th scope="col" className="px-6 py-3">
                Descripcion
              </th>
              <th scope="col" className="px-6 py-3">
                Precio
              </th>
            </tr>
          </thead>
          <tbody>
            {quotesList.length === 0 && (
              <tr>
                <td colSpan={5} className="h-full">
                  <div className="flex items-center justify-center h-full">
                    <NoQuotes />
                  </div>
                </td>
              </tr>
            )}
            {quotesList.map((_, index) => (
              <tr key={index} className="h-32 odd:bg-white even:bg-gray-50">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Apple MacBook Pro 17
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-center gap-5 pt-5">
        <Button>Ir al home</Button>
        <Button>Ver detalles</Button>
      </div>
    </main>
  )
}
