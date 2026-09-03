import { useState } from 'react'
import { churches } from './data/churches'
import type { Church } from './types/church'
import { MapView } from './components/Maps/MapView'
import { ChurchList } from './components/ChurchList/ChurchList'
import { ChurchDetail } from './components/ChurchDetail/ChurchDetail'
import './App.css'

function App() {
  const [selected, setSelected] = useState<Church | null>(null)

  return (
    <div className="flex h-screen">
      <aside className="w-80 overflow-y-auto border-r bg-white">
        <h1 className="p-4 text-lg font-bold border-b">IgrejasMapa</h1>
        <ChurchList churches={churches} onSelect={setSelected} />
      </aside>
      
      <main className="flex-1">
        <MapView churches={churches} />
      </main>

      <aside className="w-80 overflow-y-auto border-l bg-white">
        <ChurchDetail church={selected} />
      </aside>
    </div>
  )
}

export default App