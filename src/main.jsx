import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import routes from './routes.js'
import App from './App.jsx'
import Inviter from './components/Inviter.jsx'
import PrivacyPolicy from './components/PrivacyPolicy.jsx'
import TermsConditions from './components/TermsConditions.jsx'
import ContactForm from './components/ContactForm.jsx'
import DeleteAccount from './components/DeleteAccount.jsx'
import ManageData from './components/ManageData.jsx'
import Team from './components/Team.jsx'
import HimanshuResume from './components/HimanshuResume.jsx'
import VaibhavResume from './components/VaibhavResume.jsx'
import VibeTest from './components/VibeTest.jsx'
import IntrovertExtrovertTest from './components/IntrovertExtrovertTest.jsx'
import { PartyProvider } from './context/PartyContext'

const componentMap = {
  '/':                App,
  '/vibe-test':       VibeTest,
  '/introvert-extrovert-test': IntrovertExtrovertTest,
  '/privacy':         PrivacyPolicy,
  '/terms':           TermsConditions,
  '/contact':         ContactForm,
  '/delete-account':  DeleteAccount,
  '/manage-data':     ManageData,
  '/team':            Team,
  '/resume/himanshu': HimanshuResume,
  '/resume/vaibhav':  VaibhavResume,
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <HelmetProvider>
  <PartyProvider>
    <Router>
      <Routes>
        {routes.map(route => {
          const Component = componentMap[route.path]
          if (!Component) return null
          return <Route key={route.path} path={route.path} element={<Component />} />
        })}
        <Route path="/flyer/:partyid" element={<Inviter />} />
        <Route path="*" element={<App />} />
      </Routes>
    </Router>
  </PartyProvider>
  </HelmetProvider>
  </StrictMode>
)
