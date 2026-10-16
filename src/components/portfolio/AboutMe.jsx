import React from 'react'

export function AboutMe() {
  const systemStatuses = [
    { label: "Portfolio OS", status: "Online", color: "bg-green-500", text: "text-green-400" },
    { label: "J.A.R.V.I.S. AI", status: "In Dev (v0.9)", color: "bg-yellow-500", text: "text-yellow-400" },
    { label: "Salesforce / Apex", status: "Active", color: "bg-blue-500", text: "text-blue-400" },
    { label: "GitHub API", status: "Connected", color: "bg-[#FF3B3F]", text: "text-[#FF3B3F]" }
  ]

  return (
    <section id="about" className="space-y-6 text-left py-4">
      {/* Badges de Status do Sistema (MB-OS) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {systemStatuses.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#2A2A2E]/50 p-3 rounded-2xl border border-[#8F1D2C]/30 flex flex-col gap-1 backdrop-blur-sm"
          >
            <span className="text-[10px] font-mono text-[#CFCFD4]/60 uppercase tracking-wider">
              {item.label}
            </span>
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${item.color} animate-pulse`} />
              <span className={`text-xs font-mono font-bold ${item.text}`}>
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Card Sobre Mim */}
      <div className="bg-[#2A2A2E]/60 p-6 sm:p-8 rounded-3xl border border-[#8F1D2C]/40 shadow-xl relative overflow-hidden">
        {/* Detalhe estético Cyber Crimson */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF3B3F]/5 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-mono text-[#FF3B3F] font-bold uppercase tracking-widest">
            // 01. SObre mim
          </span>
          <div className="h-[1px] bg-[#8F1D2C]/40 flex-1" />
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
          Engenharia de Software com foco em Automação & Performance
        </h3>

        <div className="space-y-4 font-mono text-xs sm:text-sm text-[#CFCFD4]/90 leading-relaxed">
          <p>
            Sou desenvolvedor focado em construir soluções robustas, combinando arquitetura limpa e alta eficiência. Tenho experiência prática no ecossistema <span className="text-white font-bold">Salesforce (Apex, SOQL, Permission Sets)</span>, desenvolvimento backend com <span className="text-white font-bold">Python (FastAPI)</span> e aplicações web modernas com <span className="text-white font-bold">React e Tailwind CSS</span>.
          </p>

          <p>
            Atualmente, estou cursando <span className="text-white font-bold">Análise e Desenvolvimento de Sistemas na Unifametro</span> e construindo meu ecossistema de inteligência artificial pessoal, o projeto <span className="text-[#FF3B3F] font-bold">J.A.R.V.I.S.</span>. Gosto de resolver problemas complexos de lógica, otimização de código e automação de processos.
          </p>
        </div>

        {/* Tags de Filosofia Dev */}
        <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-[#2A2A2E]">
          <span className="text-[11px] font-mono px-3 py-1 rounded-lg bg-[#0A0A0C] border border-[#2A2A2E] text-[#CFCFD4]/80">
            ⚡ Clean Code & Refactoring
          </span>
          <span className="text-[11px] font-mono px-3 py-1 rounded-lg bg-[#0A0A0C] border border-[#2A2A2E] text-[#CFCFD4]/80">
            🤖 Agentic AI & Systems
          </span>
          <span className="text-[11px] font-mono px-3 py-1 rounded-lg bg-[#0A0A0C] border border-[#2A2A2E] text-[#CFCFD4]/80">
            ☁️ Salesforce & Cloud Integrations
          </span>
        </div>
      </div>
    </section>
  )
}
