import type { Church } from '../types/church'

export const churches: Church[] = [
  {
    id: 1,
    name: 'Paróquia Sagrados Corações de Jesus e Imaculado Coração Maria',
    address: 'Rua da Igreja, s/n',
    neighborhood: 'Centro',
    lat: -4.371397,
    lng: -45.034117,
    isOpen: true,
    massTime: ['Domingo: 08:00'],
    confessionTimes: ['Quarta a Sábado: 09:00 às 11:30'],
  },
  {
    id: 2,
    name: 'Igreja São Miguel',
    address: 'Bairro São Miguel, s/n',
    neighborhood: 'Novo',
    lat: -4.375065,
    lng: -45.039491,
    isOpen: true,
    massTime: ['Entre em contato com a secretaria da paróquia'],
  },
]
