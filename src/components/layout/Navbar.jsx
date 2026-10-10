import { useView } from '../../context/ViewContext'
import { LayoutDashboard, UserCheck, Terminal } from 'lucide-react'

export function Navbar() {
  const { activeView, setActiveView } = useView()

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#2A2A2E]/80 border-b border-[#8F1D2C]/40 text-[#CFCFD4] px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo / Nome */}
        <div className="flex items-center gap-2 font-mono text-lg font-bold text-[#FF3B3F]">
          <Terminal size={20} />
          <span>Matheus_Nascimento</span>
        </div>

        {/* Toggle Portfólio ↔ Dashboard */}
        <div className="flex bg-[#0A0A0C] p-1 rounded-xl border border-[#2A2A2E]">
          <button
            onClick={() => setActiveView('portfolio')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeView === 'portfolio'
                ? 'bg-[#FF3B3F] text-white font-bold shadow-lg shadow-[#FF3B3F]/30'
                : 'text-[#CFCFD4]/70 hover:text-white'
            }`}
          >
            <UserCheck size={16} />
            Portfólio
          </button>

          <button
            onClick={() => setActiveView('dashboard')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeView === 'dashboard'
                ? 'bg-[#8F1D2C] text-white font-bold shadow-lg shadow-[#8F1D2C]/40'
                : 'text-[#CFCFD4]/70 hover:text-white'
            }`}
          >
            <LayoutDashboard size={16} />
            Dashboard
          </button>
        </div>
      </div>
    </header>
  )
}
