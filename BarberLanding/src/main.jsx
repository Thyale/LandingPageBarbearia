import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/main.scss'

import Top from './Components/Top'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Top/>
  </StrictMode>,
)
