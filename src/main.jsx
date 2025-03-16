import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import DashboardLayout from './layout/DashboardLayout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Transactions from './pages/Transactions.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<DashboardLayout/>}>
        <Route path='/' element={<Dashboard />} />
        <Route path='/transacoes' element={<Transactions/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
)
