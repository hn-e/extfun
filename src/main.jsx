import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'
import Inviter from './components/Inviter.jsx'
import PrivacyPolicy from './components/PrivacyPolicy.jsx'
import TermsConditions from './components/TermsConditions.jsx'
import ContactForm from './components/ContactForm.jsx'
import Team from './components/Team.jsx'
import HimanshuResume from './components/HimanshuResume.jsx'
import VaibhavResume from './components/VaibhavResume.jsx'
import { PartyProvider } from './context/PartyContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <HelmetProvider>
  <PartyProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/team" element={<Team />} />
        <Route path="/resume/himanshu" element={<HimanshuResume />} />
        <Route path="/resume/vaibhav" element={<VaibhavResume />} />
        <Route path="/flyer/:partyid" element={<Inviter />} />
        <Route path="*" element={<App />} />
      </Routes>
    </Router>
  </PartyProvider>
  </HelmetProvider>
  </StrictMode>
)
