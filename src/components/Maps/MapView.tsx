import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker} from 'react-leaflet'
import type { Church } from '../../types/church'

interface Props {
churches: Church[]
}

export function MapView({ churches }: Props) {
    return (
        <MapContainer
        center={[-23.55052, -46.633308]}
        zoom={14}
        className="h-full w-full">

        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />

        {churches.map((church) => (
            <Marker
                key={church.id}
                position={[church.lat, church.lng]}
            />
        ))}
        
         
        </MapContainer>
    )
}