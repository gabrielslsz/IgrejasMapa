export interface Church {
  id: number
  name: string
  address: string
  neighborhood: string
  lat: number
  lng: number
  isOpen: boolean
  massTime: string[]
  confessionTimes?: string[]
}
