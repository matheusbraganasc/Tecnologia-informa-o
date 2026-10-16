import React, { useState, useRef, useEffect } from 'react'
import { useView } from '../../context/ViewContext'

export function Terminal() {
  const { setActiveView } = useView()
  const [input, setInput] = useState('')

  // Histórico inicial padrão
  const initialHistory = [
    { text: "MB-OS Kernel v2.0.4 loaded successfully.", type: "system" },
    { text: "Type 'help' to display available commands.", type: "info" }
  ]

  // Carrega o histórico salvo no localStorage se existir
  const [history, setHistory] = useState(() => {
    const savedHistory = localStorage.getItem('mb_os_terminal_history')
    return savedHistory ? JSON.parse(savedHistory) : initialHistory
  })

  const terminalEndRef = useRef(null)

  // Salva o histórico no localStorage sempre que houver alterações
  useEffect(() => {
    localStorage.setItem('mb_os_terminal_history', JSON.stringify(history))
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  const handleCommand = (e) => {
    e.preventDefault()
    const trimmed = input.trim()
    if (!trimmed) return

    const cmd = trimmed.toLowerCase()
    const newHistory = [...history, { text: `matheus@mb-os:~$ ${trimmed}`, type: "user" }]

    switch (cmd) {
      case 'help':
        newHistory.push({
          text: `Comandos disponíveis:
  about     - Exibe resumo sobre Matheus Braga
  projects  - Lista projetos principais em destaque
  skills    - Exibe stack técnica e competências
  contact   - Exibe meios de contato rápidos
  github    - Abre o perfil do GitHub em nova aba
  cv        - Faz o download do currículo PDF
  portfolio - Alterna para o modo Portfólio (Visão Recrutador)
  clear     - Limpa o histórico do terminal`,
          type: "response"
        })
        break

      case 'about':
        newHistory.push({
          text: `> Matheus Nascimento Braga
> Desenvolvedor Salesforce (Apex/SOQL), Python (FastAPI/Flet) e Full Stack.
> Cursando ADS na Unifametro | Criador do ecossistema J.A.R.V.I.S. AI.`,
          type: "response"
        })
        break

      case 'projects':
        newHistory.push({
          text: `Projetos Ativos:
  1. J.A.R.V.I.S. AI Assistant [Python/FastAPI/Flet]
  2. Cyber Crimson Portfolio & Dashboard [React/Tailwind]
  3. Salesforce Permission & Apex Modules [Apex/SOQL]`,
          type: "response"
        })
        break

      case 'skills':
        newHistory.push({
          text: `Tech Stack:
  • Cloud & CRM: Salesforce Apex, SOQL, Permission Sets
  • Languages: Python, JavaScript, Java, PHP, SQL
  • Web & UI: React, Vite, Tailwind CSS, HTML/CSS
  • Tools & AI: FastAPI, Flet, Termux, Git/GitHub, Linux`,
          type: "response"
        })
        break

      case 'contact':
        newHistory.push({
          text: `Contato Direto:
  • Email: matheusbraganasc@gmail.com
  • GitHub: https://github.com/matheusbraganasc`,
          type: "response"
        })
        break

      case 'github':
        window.open('https://github.com/matheusbraganasc', '_blank')
        newHistory.push({ text: "Redirecionando para https://github.com/matheusbraganasc...", type: "system" })
        break

      case 'cv':
        const link = document.createElement('a')
        link.href = '/Curriculo_Matheus_Braga.pdf'
        link.download = 'Curriculo_Matheus_Braga.pdf'
        link.click()
        newHistory.push({ text: "Download do currículo iniciado...", type: "system" })
        break

      case 'portfolio':
        setActiveView('portfolio')
        break

      case 'clear':
        localStorage.removeItem('mb_os_terminal_history')
        setHistory(initialHistory)
        setInput('')
        return

      default:
        newHistory.push({
          text: `Comando não reconhecido: '${trimmed}'. Digite 'help' para ver os comandos.`,
          type: "error"
        })
        break
    }

    setHistory(newHistory)
    setInput('')
  }

  return (
    <div className="bg-[#0A0A0C] border border-[#8F1D2C]/60 rounded-2xl shadow-2xl overflow-hidden text-left font-mono my-4">
      {/* Barra de Título do Terminal */}
      <div className="bg-[#2A2A2E]/80 px-4 py-2.5 border-b border-[#2A2A2E] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#FF3B3F]" />
          <span className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-xs text-[#CFCFD4]/70 ml-2">bash - matheus@mb-os: ~</span>
        </div>
        <button 
          onClick={() => {
            localStorage.removeItem('mb_os_terminal_history')
            setHistory(initialHistory)
          }}
          className="text-[10px] text-[#CFCFD4]/40 hover:text-[#FF3B3F] uppercase tracking-widest transition-colors"
          title="Resetar Histórico"
        >
          // Reset CLI
        </button>
      </div>

      {/* Janela de Saída */}
      <div className="p-4 h-64 sm:h-80 overflow-y-auto space-y-2 text-xs sm:text-sm">
        {history.map((item, idx) => (
          <div key={idx} className="whitespace-pre-wrap leading-relaxed">
            {item.type === "user" && <span className="text-[#FF3B3F] font-bold">{item.text}</span>}
            {item.type === "system" && <span className="text-green-400">{item.text}</span>}
            {item.type === "info" && <span className="text-[#CFCFD4]/60">{item.text}</span>}
            {item.type === "response" && <span className="text-[#CFCFD4]">{item.text}</span>}
            {item.type === "error" && <span className="text-red-400 font-bold">{item.text}</span>}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Input de Comandos */}
      <form onSubmit={handleCommand} className="bg-[#0A0A0C] border-t border-[#2A2A2E] px-4 py-3 flex items-center gap-2">
        <span className="text-[#FF3B3F] font-bold text-xs sm:text-sm">matheus@mb-os:~$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite um comando (ex: help)..."
          className="flex-1 bg-transparent text-white text-xs sm:text-sm focus:outline-none font-mono placeholder-[#CFCFD4]/30"
          autoFocus
        />
        <button type="submit" className="text-xs px-2.5 py-1 rounded bg-[#FF3B3F]/20 text-[#FF3B3F] hover:bg-[#FF3B3F] hover:text-white transition-all font-bold">
          Executar
        </button>
      </form>
    </div>
  )
}
