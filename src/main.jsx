import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import Header from './Components/Header/Header'
import MainContent from './Components/MainContent/MainContent'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <MainContent />
  </StrictMode>,
)
