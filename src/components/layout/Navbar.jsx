import React, { useState } from 'react'
import { useView } from '../../context/ViewContext'

export function Navbar() {
  const { activeView, setActiveView } = useView()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Navbar Fixa no Topo */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0A0A0C]/90 backdrop-blur-md border-b border-[#2A2A2E] px-4 sm:px-8 py-3.5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          
          {/* Logo / Nome */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF3B3F] animate-pulse" />
            <span className="font-mono font-bold text-white text-base sm:text-lg tracking-wide">
              Matheus<span className="text-[#FF3B3F]">.Braga</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 bg-[#0A0A0C] p-1 rounded-xl border border-[#2A2A2E] font-mono text-xs">
            <button
              onClick={() => setActiveView('portfolio')}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeView === 'portfolio'
                  ? 'bg-[#FF3B3F] text-white font-bold shadow-md shadow-[#FF3B3F]/20'
                  : 'text-[#CFCFD4]/70 hover:text-white'
              }`}
            >
              💼 Portfólio
            </button>
            <button
              onClick={() => setActiveView('dashboard')}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeView === 'dashboard'
                  ? 'bg-[#FF3B3F] text-white font-bold shadow-md shadow-[#FF3B3F]/20'
                  : 'text-[#CFCFD4]/70 hover:text-white'
              }`}
            >
              ⚡ Dashboard
            </button>
          </div>

          {/* Botão Hambúrguer Mobile */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-2.5 rounded-xl bg-[#2A2A2E]/80 text-white border border-[#8F1D2C]/40 hover:border-[#FF3B3F] focus:outline-none transition-all active:scale-95"
            aria-label="Abrir Menu"
          >
            <span className="text-lg font-mono">☰</span>
          </button>
        </div>
      </nav>

      {/* Modal / Card Flutuante de Menu Mobile */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-20 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#0A0A0C] border border-[#8F1D2C]/60 w-full max-w-sm rounded-3xl p-6 shadow-2xl relative text-left flex flex-col gap-6">
            
            {/* Cabeçalho do Modal */}
            <div className="flex items-center justify-between border-b border-[#2A2A2E] pb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF3B3F]" />
                <span className="font-mono font-bold text-white text-base">
                  Matheus<span className="text-[#FF3B3F]">.Braga</span>
                </span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-9 h-9 rounded-full bg-[#2A2A2E] text-[#CFCFD4] hover:text-white flex items-center justify-center text-lg font-bold transition-all border border-[#2A2A2E]"
                aria-label="Fechar Menu"
              >
                ✕
              </button>
            </div>

            {/* Links e Opções de Navegação */}
            <div className="flex flex-col gap-3 font-mono text-sm">
              <p className="text-[11px] text-[#CFCFD4]/50 uppercase tracking-wider font-bold mb-1">// Navegação</p>

              <button
                onClick={() => {
                  setActiveView('portfolio')
                  setIsMenuOpen(false)
                }}
                className={`w-full text-left px-5 py-3.5 rounded-2xl transition-all flex items-center justify-between font-bold ${
                  activeView === 'portfolio'
                    ? 'bg-[#FF3B3F] text-white shadow-lg shadow-[#FF3B3F]/20'
                    : 'bg-[#2A2A2E]/50 text-[#CFCFD4] hover:bg-[#2A2A2E] border border-[#2A2A2E]'
                }`}
              >
                <span>💼 Portfólio</span>
                <span className="text-xs opacity-70">Recrutador</span>
              </button>

              <button
                onClick={() => {
                  setActiveView('dashboard')
                  setIsMenuOpen(false)
                }}
                className={`w-full text-left px-5 py-3.5 rounded-2xl transition-all flex items-center justify-between font-bold ${
                  activeView === 'dashboard'
                    ? 'bg-[#FF3B3F] text-white shadow-lg shadow-[#FF3B3F]/20'
                    : 'bg-[#2A2A2E]/50 text-[#CFCFD4] hover:bg-[#2A2A2E] border border-[#2A2A2E]'
                }`}
              >
                <span>⚡ Dev Dashboard</span>
                <span className="text-xs opacity-70">CLI & System</span>
              </button>
            </div>

            {/* Rodapé do Modal */}
            <div className="pt-2 border-t border-[#2A2A2E] text-center">
              <span className="text-[10px] font-mono text-[#CFCFD4]/40">
                Cyber Crimson Theme • v1.0
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
