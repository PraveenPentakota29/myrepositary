import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import database from './database.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <database/>
    
  </StrictMode>,
)
