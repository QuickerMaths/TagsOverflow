import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/globals.css'
import { ThemeProvider } from './context/theme-provider.tsx'
import TagsProvider from './context/tags-context.tsx'
import App from './App.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <TagsProvider>
        <App />
      </TagsProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
