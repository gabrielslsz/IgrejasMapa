import type { Church } from '../../types/church'

interface Props {
    churches: Church[]
    onSelect: (church: Church) => void
}

export function ChurchList({ churches, onSelect }: Props) {
    return (
        <ul className="flex flex-col gap-2 p-4">
            {churches.map((church) => (
                <li
                    key={church.id}
                    onClick={() => onSelect(church)}
                    className="cursor-pointer rounded-lg border p-3 hover:bg-gray-100"
                >
                    <p className="font-bold">{church.name}</p>
                    <p className="text-sm text-gray-500">{church.address}</p>
                    <span className={`text-sm ${church.isOpen ? 'text-green-500' : 'text-red-500'}`}>
                        {church.isOpen ? 'Aberta' : 'Fechada'}
                    </span>
                </li>
            ))}
        </ul>
    )
}

