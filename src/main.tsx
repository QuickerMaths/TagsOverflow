import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './css/globals.css'
import { ThemeProvider } from './context/theme-provider.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
