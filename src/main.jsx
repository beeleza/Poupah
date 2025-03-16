import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import DashboardLayout from './layout/DashboardLayout.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<DashboardLayout/>}>
        <Route path='/' element={<App />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
