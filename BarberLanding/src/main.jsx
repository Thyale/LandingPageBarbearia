import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/main.scss'

import Top from '../src/Components/Header/Top'
import Sobre from '../src/Components/Main/Sobre'
import BtnWhats from './Components/IconWhats/BtnWhats'
import Services from './Components/Main/Services'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Top/>
    <Sobre/>
    <BtnWhats/>
    <Services/>
  </StrictMode>,
)
