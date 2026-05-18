import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Create from './components/Create'
import Read from './components/Read'
import Update from './components/Update'
import Delete from './components/Delete'
import './styles/App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/criar' element={<Create />} />
        <Route path='/visualizar' element={<Read />} />
        <Route path='/alterar' element={<Update />} />
        <Route path='/remover' element={<Delete />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
