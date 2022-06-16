import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'
import Expenses from './routes/Expenses'
import Invoice from './routes/Invoice'
import Invoices from './routes/Invoices'
import NotFound from './routes/NotFound'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path='/expenses' element={<Expenses />}></Route>
          <Route path='/invoices' element={<Invoices />}>
            <Route index element={<div className='App' style={{ padding: "1rem" }}>Select an invoice</div>} />
            <Route path=':invoiceId' element={<Invoice />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
