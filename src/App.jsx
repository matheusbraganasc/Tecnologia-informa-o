import React from 'react'
import { Navbar } from './components/layout/Navbar'
import { HeroSection } from './components/portfolio/HeroSection'
import { Timeline } from './components/portfolio/Timeline'
import { ProjectsGrid } from './components/portfolio/ProjectsGrid'
import { SkillsSection } from './components/portfolio/SkillsSection'
import { Terminal } from './components/dashboard/Terminal'
import { SystemHealth } from './components/dashboard/SystemHealth'
import { SpotifyWidget } from './components/dashboard/SpotifyWidget'
import { ViewProvider, useView } from './context/ViewContext'

function MainContent() {
  const { activeView } = useView()

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-8">
      {activeView === 'portfolio' ? (
        <div className="space-y-8">
          <HeroSection />
          <Timeline />
          <ProjectsGrid />
          <SkillsSection />
        </div>
      ) : (
        <div className="space-y-6 text-left">
          <div className="py-2 sm:py-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Dev <span className="text-[#FF3B3F]">Dashboard</span> & Interactive CLI
            </h2>
            <p className="text-xs sm:text-sm text-[#CFCFD4]/70 mt-1 font-mono">
              // Painel de controle interativo em tempo real
            </p>
          </div>

          <Terminal />
          <SystemHealth />
          <SpotifyWidget />
        </div>
      )}
    </main>
  )
}

export default function App() {
  return (
    <ViewProvider>
      <div className="min-h-screen bg-[#0A0A0C] text-[#CFCFD4] font-sans">
        <Navbar />
        <MainContent />
      </div>
    </ViewProvider>
  )
}
