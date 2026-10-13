import React, { useState } from 'react'

export function HeroSection() {
  const [copied, setCopied] = useState(false)
  const email = "matheusbraganasc@gmail.com"

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section className="py-8 sm:py-12 text-left">
      {/* Badge Status */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2A2A2E]/60 border border-[#8F1D2C]/40 mb-6">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-xs font-mono text-[#CFCFD4]">Disponível para Projetos e Oportunidades</span>
      </div>

      {/* Título Principal */}
      <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
        Olá, sou o <span className="text-[#FF3B3F]">Matheus Braga</span>
      </h1>

      <p className="text-base sm:text-xl font-mono text-[#CFCFD4]/90 max-w-2xl leading-relaxed mb-6">
        Desenvolvedor Salesforce (Apex/SOQL), Python & Full Stack. Estudante de Análise e Desenvolvimento de Sistemas.
      </p>

      {/* Botões Principais de Ação */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-md sm:max-w-none">
        <a
          href="/Curriculo_Matheus_Braga.pdf"
          download="Curriculo_Matheus_Braga.pdf"
          className="px-6 py-3 rounded-xl bg-[#FF3B3F] hover:bg-[#8F1D2C] text-white font-mono text-xs sm:text-sm font-bold transition-all shadow-lg shadow-[#FF3B3F]/20 text-center flex items-center justify-center gap-2"
        >
          📄 Baixar CV
        </a>

        <a
          href={`mailto:${email}`}
          className="px-6 py-3 rounded-xl bg-[#0A0A0C] hover:bg-[#2A2A2E] text-[#CFCFD4] hover:text-white font-mono text-xs sm:text-sm font-bold transition-all border border-[#8F1D2C]/40 hover:border-[#FF3B3F] text-center flex items-center justify-center gap-2"
        >
          ✉ Enviar E-mail
        </a>

        <button
          onClick={handleCopyEmail}
          className="px-4 py-3 rounded-xl bg-[#2A2A2E]/60 hover:bg-[#2A2A2E] text-[#CFCFD4] hover:text-white font-mono text-xs font-bold transition-all border border-[#2A2A2E] hover:border-[#FF3B3F]/40 text-center"
        >
          {copied ? '✓ Copiado!' : '📋 Copiar E-mail'}
        </button>
      </div>
    </section>
  )
}
