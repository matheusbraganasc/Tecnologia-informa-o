import React from 'react'

const experiences = [
  {
    period: "2026 - Presente",
    role: "Análise e Desenvolvimento de Sistemas",
    company: "Unifametro",
    description: "Graduação focada em arquitetura de software, desenvolvimento web, banco de dados e metodologias ágeis.",
    tags: ["Engenharia de Software", "SQL", "Web Dev"]
  },
  {
    period: "2026",
    role: "Estagiário de Desenvolvimento Salesforce",
    company: "C3C Software",
    description: "Desenvolvimento de código Apex, regras de negócio, automações de processos no Salesforce e suporte a deployments em produção.",
    tags: ["Apex", "Salesforce", "SOQL", "Git"]
  },
  {
    period: "Ensino Técnico",
    role: "Técnico em Informática",
    company: "EEEP Paulo Petrola",
    description: "Formação técnica de nível médio com foco em lógica de programação, redes, manutenção de sistemas e fundamentos de desenvolvimento.",
    tags: ["Lógica", "Java", "Hardware", "Redes"]
  }
]

export function Timeline() {
  return (
    <section className="py-12 border-t border-[#2A2A2E]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 text-left">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Trajetória & <span className="text-[#FF3B3F]">Experiência</span>
          </h2>
          <p className="text-sm text-[#CFCFD4]/70 mt-1 font-mono">
            // Formação e histórico profissional
          </p>
        </div>
      </div>

      <div className="relative border-l-2 border-[#8F1D2C]/40 ml-3 md:ml-6 space-y-8 text-left">
        {experiences.map((item, index) => (
          <div key={index} className="relative pl-6 md:pl-8 group">
            {/* Ponto indicador da linha do tempo */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#0A0A0C] border-2 border-[#FF3B3F] group-hover:scale-125 transition-all" />

            {/* Card da experiência */}
            <div className="bg-[#2A2A2E]/60 p-5 md:p-6 rounded-2xl border border-[#8F1D2C]/30 hover:border-[#FF3B3F]/60 transition-all shadow-md">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono font-bold text-[#FF3B3F] bg-[#0A0A0C] px-3 py-1 rounded-full border border-[#8F1D2C]/40">
                  {item.period}
                </span>
                <span className="text-xs font-mono text-[#CFCFD4]/60">
                  {item.company}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                {item.role}
              </h3>

              <p className="text-sm text-[#CFCFD4]/80 leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Tags de tecnologias */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs font-mono text-[#CFCFD4]/90 bg-[#0A0A0C]/80 px-2.5 py-1 rounded-lg border border-[#2A2A2E]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
