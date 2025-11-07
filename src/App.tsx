import { Routes, Route } from 'react-router-dom';
import PWABadge from './PWABadge.tsx'
import './App.css'
import { PageNotFound } from './pages/common/PageNotFound.tsx';
import { Login } from './pages/auth/Login.tsx';
import { Register } from './pages/auth/Register.tsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <PWABadge />
    </>
  )
}

export default App
