import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'
import Read from './pages/Read'
import Update from './pages/Update'
import Delete from './pages/Delete'
import './styles/App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/criar' element={<Create />} />
        <Route path='/ler/:id' element={<Read />} />
        <Route path='/alterar' element={<Update />} />
        <Route path='/apagar' element={<Delete />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App