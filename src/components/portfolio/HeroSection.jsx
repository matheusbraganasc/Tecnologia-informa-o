import React from 'react'

export function HeroSection() {
  return (
    <section className="py-12 relative overflow-hidden text-left">
      {/* Efeito Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#8F1D2C]/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 space-y-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2A2A2E] border border-[#8F1D2C]/50 text-xs font-medium text-[#CFCFD4]">
            <span className="w-2 h-2 rounded-full bg-[#FF3B3F] animate-pulse" />
            <span>Disponível para novos projetos</span>
          </div>

          {/* Nome e Cargo */}
          <div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Olá, sou <br />
              <span className="text-[#FF3B3F]">Matheus Nascimento Braga</span>
            </h1>
            <p className="text-lg font-mono text-[#CFCFD4]/80 mt-2">
              Desenvolvedor de Software <span className="text-[#8F1D2C]">|</span> Apex • Python • React
            </p>
          </div>

          {/* Bio */}
          <p className="text-[#CFCFD4]/80 text-sm sm:text-base leading-relaxed">
            Desenvolvedor com experiência em automação Salesforce (Apex), microsserviços em Python e aplicações Web modernas.
          </p>

          {/* Botões */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="/resume.pdf"
              download
              className="px-5 py-2.5 rounded-xl bg-[#FF3B3F] text-white font-bold text-sm shadow-lg shadow-[#FF3B3F]/20"
            >
              Baixar CV
            </a>
            <a
              href="mailto:contato@exemplo.com"
              className="px-5 py-2.5 rounded-xl bg-[#2A2A2E] text-[#CFCFD4] border border-[#8F1D2C]/40 text-sm font-medium"
            >
              Contato
            </a>
          </div>
        </div>

        {/* Card Avatar */}
        <div className="w-full sm:w-auto flex justify-center mt-6 md:mt-0">
          <div className="w-64 h-64 bg-[#2A2A2E] rounded-3xl p-6 border border-[#8F1D2C]/50 flex flex-col items-center justify-center space-y-3 text-center shadow-xl">
            <div className="w-20 h-20 rounded-full bg-[#0A0A0C] border-2 border-[#FF3B3F] flex items-center justify-center text-2xl font-mono font-bold text-[#FF3B3F]">
              MB
            </div>
            <div>
              <p className="font-mono text-sm font-bold text-white">matheus_braga.dev</p>
              <p className="text-xs text-[#CFCFD4]/60 font-mono mt-1">Caucaia / Fortaleza, CE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
