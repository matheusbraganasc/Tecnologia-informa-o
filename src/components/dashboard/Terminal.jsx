import React, { useState, useRef, useEffect } from 'react'

export function Terminal() {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([
    { text: 'MB-CLI OS v1.0.0 (x86_64-pc-linux-gnu)', type: 'system' },
    { text: 'Escreva "help" para ver a lista de comandos disponíveis.', type: 'system' }
  ])
  const terminalEndRef = useRef(null)

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [history])

  const handleCommand = (e) => {
    e.preventDefault()
    const trimmed = input.trim().toLowerCase()
    if (!trimmed) return

    const newHistory = [...history, { text: `matheus@braga-dev:~$ ${input}`, type: 'user' }]

    switch (trimmed) {
      case 'help':
        newHistory.push({
          text: `Comandos disponíveis:
  • help      - Exibe esta lista de comandos
  • whoami    - Resumo sobre o Matheus
  • skills    - Lista as principais linguagens e tecnologias
  • projects  - Lista os projetos em destaque
  • contact   - Links de contacto e e-mail
  • clear     - Limpa o histórico da consola`,
          type: 'output'
        })
        break

      case 'whoami':
        newHistory.push({
          text: 'Matheus Nascimento Braga | Dev Salesforce (Apex), Python e Full Stack. Cursando ADS na Unifametro.',
          type: 'output'
        })
        break

      case 'skills':
        newHistory.push({
          text: 'Stack: Apex (Salesforce), Python, Node.js, React, Java, SOQL/SQL, Git, Termux CLI.',
          type: 'output'
        })
        break

      case 'projects':
        newHistory.push({
          text: `Projetos Ativos:
  1. JARVIS AI - Assistente Virtual em Python
  2. Salesforce Apex Custom Modules
  3. Personal Portfolio & Dev Dashboard`,
          type: 'output'
        })
        break

      case 'contact':
        newHistory.push({
          text: 'Email: contato@exemplo.com | LinkedIn: /in/matheusbraga | GitHub: /seu-usuario',
          type: 'output'
        })
        break

      case 'clear':
        setHistory([])
        setInput('')
        return

      default:
        newHistory.push({
          text: `Comando não reconhecido: "${trimmed}". Digite "help" para ver a lista.`,
          type: 'error'
        })
        break
    }

    setHistory(newHistory)
    setInput('')
  }

  return (
    <div className="bg-[#0A0A0C] border border-[#8F1D2C]/60 rounded-2xl p-4 font-mono text-xs sm:text-sm text-[#CFCFD4] shadow-2xl text-left my-6">
      {/* Cabeçalho da janela do Terminal */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#2A2A2E]">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#FF3B3F]" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-xs text-[#CFCFD4]/50">bash - matheus@braga-dev:~</span>
      </div>

      {/* Histórico do Terminal */}
      <div className="h-64 overflow-y-auto space-y-2 pr-2 scrollbar-thin scrollbar-thumb-[#8F1D2C]">
        {history.map((item, idx) => (
          <div key={idx}>
            {item.type === 'user' && (
              <p className="text-white font-bold">{item.text}</p>
            )}
            {item.type === 'system' && (
              <p className="text-[#CFCFD4]/60 italic">{item.text}</p>
            )}
            {item.type === 'output' && (
              <pre className="text-[#FF3B3F] whitespace-pre-wrap font-mono mt-1">{item.text}</pre>
            )}
            {item.type === 'error' && (
              <p className="text-red-400">{item.text}</p>
            )}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Prompt de Entrada */}
      <form onSubmit={handleCommand} className="flex items-center gap-2 pt-3 border-t border-[#2A2A2E] mt-3">
        <span className="text-[#FF3B3F] font-bold">matheus@braga-dev:~$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="digite um comando..."
          className="flex-1 bg-transparent outline-none text-white font-mono placeholder-[#CFCFD4]/30"
          autoFocus
        />
      </form>
    </div>
  )
}
