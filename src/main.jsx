import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Inviter from './components/Inviter.jsx'
import PrivacyPolicy from './components/PrivacyPolicy.jsx'
import TermsConditions from './components/TermsConditions.jsx'
import Team from './components/Team.jsx'
import HimanshuResume from './components/HimanshuResume.jsx'
import VaibhavResume from './components/VaibhavResume.jsx'
import { PartyProvider } from './context/PartyContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <PartyProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/team" element={<Team />} />
        <Route path="/resume/himanshu" element={<HimanshuResume />} />
        <Route path="/resume/vaibhav" element={<VaibhavResume />} />
        <Route path="/flyer/:partyid" element={<Inviter />} />
        <Route path="*" element={<App />} />
      </Routes>
    </Router>
  </PartyProvider>
  </StrictMode>
)
