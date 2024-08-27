import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/main.scss'

import Top from './Components/Top'
import Sobre from './Components/Sobre'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Top/>
    <Sobre/>
  </StrictMode>,
)
