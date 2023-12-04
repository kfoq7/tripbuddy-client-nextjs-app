import { AmountInput, SelectInput, Input, Button, Title } from './ui'
import { Person, Question, LocationOn, RequestCash } from './icons'

export default function SelectData() {
  return (
    <section className="flex flex-col items-center justify-center">
      <Title className="w-[500px] pb-10">
        Elige tu destino y las fechas en que piensas viajar
      </Title>

      <div className="flex flex-col">
        <Input className="w-[550px] mb-1" icon={<LocationOn />} />
        <span
          onClick={e => {
            e.preventDefault()
            console.log('Adding new destination')
          }}
          className="mr-auto text-sm cursor-pointer"
        >
          + Agrega otro destino
        </span>
      </div>

      <div className="flex items-center justify-center">
        <Input type="date" />
        <SelectInput
          icon={<Person />}
          title="Numero personas"
          elements={[
            <AmountInput key="adultos" title="Adultos" />,
            <AmountInput key="ninos" title="Niños" />,
            <AmountInput key="adultos" title="Adultos" />
          ]}
        />
        <Input
          placeholder="Presupuesto por persona"
          title="USD"
          icon={<RequestCash />}
        />
      </div>

      <h2 className="text-black font-semibold pt-5 pb-2 flex items-center">
        Te gustaria incluir alojamiento
        <span className="mx-2 rounded-full bg-black text-white">
          <Question />
        </span>
      </h2>

      <div className="flex items-center justify-center gap-5 pt-5">
        <Button className="w-[324px] text-xl !text-gray-700 bg-white border-2 border-black tracking-tighter font-semibold">
          Quiero un hotel
        </Button>
        <Button className="w-[324px] text-xl !text-gray-700 bg-white border-2 border-black tracking-tighter font-semibold">
          Quiero un Airbnb
        </Button>
        <Button className="w-[324px] text-xl !text-gray-700 bg-white border-2 border-black tracking-tighter font-semibold">
          No, gracias
        </Button>
      </div>
    </section>
  )
}
