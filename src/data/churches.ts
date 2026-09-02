import type { Church } from '../types/church'

export const churches: Church[] = [
    {
        id: 1,
        name: 'Igreja São José',
        address: 'Rua São José, 123',
        neighborhood: 'Centro',
        lat: -23.55052,
        lng: -46.633308,
        isOpen: true,
        massTime: ['08:00', '10:00', '18:00'],
        confessionTimes: ['09:00', '17:00']
    },

    {
        id: 2,
        name: 'Igreja Nossa Senhora Aparecida',
        address: 'Avenida Brasil, 456',
        neighborhood: 'Jardim América',
        lat: -23.55152,
        lng: -46.634308,
        isOpen: false,
        massTime: ['07:00', '09:00', '19:00'],
        confessionTimes: ['08:00', '18:00']
    },
]