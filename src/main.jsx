import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css';
import App from './App.jsx'
import './index.css'
import SkillSectionComponent from './SkillSectionComponent.jsx'
import PortfolioSectio from './PortfolioSectio.jsx'
import Header from './Header.jsx'
import HeaderImageSectin from './HeaderImageSectin.jsx';
import AboutMe from './AboutMe.jsx';
import ContactSection from './ContactSection.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Header />,
    <HeaderImageSectin  />,
    <AboutMe />,
    <SkillSectionComponent />,
    <PortfolioSectio />,
    <ContactSection />
  </StrictMode>,
)
