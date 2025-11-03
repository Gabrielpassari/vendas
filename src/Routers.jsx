import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'

export default function Routers() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='*' element={<div>Página não encontrada</div>} />
        </Routes>
    )
}
