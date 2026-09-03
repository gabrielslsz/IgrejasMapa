import 'leaflet/dist/leaflet.css'
import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import type { Church } from '../../types/church'

interface Props {
  churches: Church[]
  selected: Church | null
}

/**
 * Componente auxiliar que vive dentro do MapContainer.
 * Usa o hook useMap() para acessar a instância do mapa
 * e mover/dar zoom quando a igreja selecionada mudar.
 */
function MapController({ selected }: { selected: Church | null }) {
  const map = useMap()

  useEffect(() => {
    if (selected) {
      map.flyTo([selected.lat, selected.lng], 17, {
        duration: 1.2, // animação de 1.2 segundos
      })
    }
  }, [selected, map])

  return null
}

export function MapView({ churches, selected }: Props) {
  return (
    <MapContainer
      center={[-4.371397, -45.034117]}
      zoom={14}
      className="h-full w-full"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />

      {churches.map((church) => (
        <Marker key={church.id} position={[church.lat, church.lng]} />
      ))}

      {/* escuta a igreja selecionada e move o mapa */}
      <MapController selected={selected} />
    </MapContainer>
  )
}
