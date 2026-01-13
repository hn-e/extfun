import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Inviter from './components/Inviter.jsx'
import { PartyProvider } from './context/PartyContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <PartyProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/flyer/:partyid" element={<Inviter />} />
        <Route path="*" element={<App />} />
      </Routes>
    </Router>
  </PartyProvider>
  </StrictMode>
)
