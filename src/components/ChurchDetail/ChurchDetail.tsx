import type { Church } from '../../types/church'

interface Props {
  church: Church | null
}

export function ChurchDetail({ church }: Props) {
  if (!church) {
    return (
      <div className="p-4">
        <p className="text-gray-500">
          Selecione uma igreja para ver os detalhes.
        </p>
      </div>
    )
  }

  // monta a URL do Google Maps com as coordenadas da igreja
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${church.lat},${church.lng}`

  return (
    <div className="flex h-full flex-col justify-between p-4">
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-bold">{church.name}</h2>
        <p className="text-gray-600">
          {church.address} — {church.neighborhood}
        </p>

        <span
          className={
            church.isOpen
              ? 'font-semibold text-green-600'
              : 'font-semibold text-red-600'
          }
        >
          {church.isOpen ? 'Aberta' : 'Fechada'}
        </span>

        <div>
          <p className="font-semibold">Horários de Missa:</p>
          <ul className="list-inside list-disc text-gray-700">
            {church.massTime.map((time) => (
              <li key={time}>{time}</li>
            ))}
          </ul>
        </div>

        {church.confessionTimes && (
          <div>
            <p className="font-semibold">Confissões:</p>
            <ul className="list-inside list-disc text-gray-700">
              {church.confessionTimes.map((time) => (
                <li key={time}>{time}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* botão fixo no fundo do painel */}
      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 block rounded-lg bg-gray-900 py-3 text-center font-semibold text-white hover:bg-gray-700"
      >
        📍 Como Chegar
      </a>
    </div>
  )
}
