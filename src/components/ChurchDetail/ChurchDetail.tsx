import type { Church } from '../../types/church'

interface Props {
    church: Church | null
}

export function ChurchDetail({ church }:Props) {
    if (!church) {
        return (
            <div className="p-4">
                <p className="text-gray-500">Selecione uma igreja para ver os detalhes.</p>
            </div>
        )
    }

    return (
        <div className="p-4 flex flex-col gap-3">
            <h2 className="text-xl font-bold">{church.name}</h2>
            <p className="text-gray-600">{church.address} - {church.neighborhood}</p>

            <span className={church.isOpen ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                {church.isOpen ? 'Aberta' : 'Fechada'}
            </span>

            <div>
                <p className="font-semibold">Horários de Missa:</p>
                <ul className="list-disc list-inside text-gray-700">
                    {church.massTime.map((time) => (
                        <li key={time}>{time}</li>
                    ))}
                </ul>
            </div>

            {church.confessionTimes && (
                <div>
                    <p className="font-semibold">Confissões:</p>
                    <ul className="list-disc list-inside text-gray-700">
                        {church.confessionTimes.map((time) => (
                            <li key={time}>{time}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}