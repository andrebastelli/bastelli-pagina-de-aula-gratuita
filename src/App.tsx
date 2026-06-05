import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { VendasPage } from '@/pages/VendasPage'
import { ObrigadoPage } from '@/pages/ObrigadoPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VendasPage />} />
        <Route path="/obrigado" element={<ObrigadoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
