import React from 'react'

export function ProjectsGrid() {
  const projects = [
    {
      title: "J.A.R.V.I.S. AI Assistant",
      subtitle: "Ecossistema de Inteligência Artificial Agêntica",
      description: "Assistente pessoal inteligente composto por Jarvis-Backend (FastAPI), Jarvis-Assistente (Termux/Python) e interface mobile Jarvis-HUD (Flet).",
      tags: ["Python", "FastAPI", "Flet", "Agentic AI", "Termux"],
      // Podes adicionar uma imagem/GIF na pasta public/ e colocar a rota aqui (ex: "/projects/jarvis.gif")
      image: null,
      github: "https://github.com/matheusbraganasc",
      demo: null,
      featured: true
    },
    {
      title: "Cyber Crimson Portfolio & Dashboard",
      subtitle: "Sistema Web Interativo Dual-View",
      description: "Portfólio moderno em React e Tailwind CSS com modo Recrutador e modo Dev Dashboard com monitorização de latência em tempo real e integração com Spotify e GitHub.",
      tags: ["React", "Vite", "Tailwind CSS", "REST API"],
      image: null,
      github: "https://github.com/matheusbraganasc/matheusbraga-portfolio",
      demo: "#",
      featured: true
    },
    {
      title: "Salesforce Permission & Apex Modules",
      subtitle: "Módulos de Automação & Segurança Cloud",
      description: "Desenvolvimento de rotinas em Apex, consultas otimizadas em SOQL e estruturação de Permission Sets e fluxos de deploy em ambiente empresarial.",
      tags: ["Salesforce", "Apex", "SOQL", "Cloud Security"],
      image: null,
      github: "https://github.com/matheusbraganasc",
      demo: null,
      featured: false
    }
  ]

  return (
    <section id="projects" className="space-y-6 text-left py-4">
      {/* Cabeçalho da Secção */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-mono text-[#FF3B3F] font-bold uppercase tracking-widest">
          // 02. Projetos em Destaque
        </span>
        <div className="h-[1px] bg-[#8F1D2C]/40 flex-1" />
      </div>

      <p className="text-xs sm:text-sm font-mono text-[#CFCFD4]/70">
        Alguns dos principais sistemas e soluções que desenvolvi recentemente:
      </p>

      {/* Grelha de Projetos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className={`bg-[#2A2A2E]/60 rounded-3xl border border-[#8F1D2C]/40 p-6 shadow-xl flex flex-col justify-between hover:border-[#FF3B3F]/60 transition-all group relative overflow-hidden ${
              project.featured ? 'md:col-span-2 lg:col-span-1' : ''
            }`}
          >
            {/* Efeito Glow no Hover */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#FF3B3F]/10 rounded-full blur-3xl group-hover:bg-[#FF3B3F]/20 transition-all pointer-events-none" />

            <div>
              {/* Capa/Imagem do Projeto (se configurada) */}
              {project.image ? (
                <div className="w-full h-44 mb-4 rounded-2xl overflow-hidden border border-[#2A2A2E] bg-[#0A0A0C]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ) : (
                /* Placeholder Estilizado estilo Terminal quando não houver imagem */
                <div className="w-full h-28 mb-4 rounded-2xl border border-[#2A2A2E] bg-[#0A0A0C] p-4 flex flex-col justify-between font-mono text-xs">
                  <div className="flex items-center justify-between text-[#CFCFD4]/40">
                    <span>// SYSTEM_PREVIEW</span>
                    <span className="w-2 h-2 rounded-full bg-[#FF3B3F] animate-pulse" />
                  </div>
                  <div className="text-[#FF3B3F] font-bold tracking-wider">
                    &gt; {project.title.toUpperCase()}
                  </div>
                </div>
              )}

              {/* Título e Subtítulo */}
              <h4 className="text-lg font-bold text-white group-hover:text-[#FF3B3F] transition-colors">
                {project.title}
              </h4>
              <p className="text-xs font-mono text-[#FF3B3F]/80 mb-3">
                {project.subtitle}
              </p>

              {/* Descrição */}
              <p className="text-xs sm:text-sm font-mono text-[#CFCFD4]/80 leading-relaxed mb-4">
                {project.description}
              </p>
            </div>

            <div>
              {/* Badges das Tecnologias */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-[#0A0A0C] border border-[#2A2A2E] text-[#CFCFD4]/70"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Botões de Ação */}
              <div className="flex items-center gap-3 pt-3 border-t border-[#2A2A2E]">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center py-2.5 px-4 rounded-xl bg-[#0A0A0C] hover:bg-[#2A2A2E] text-white font-mono text-xs font-bold border border-[#8F1D2C]/40 hover:border-[#FF3B3F] transition-all"
                  >
                    💻 GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    className="flex-1 text-center py-2.5 px-4 rounded-xl bg-[#FF3B3F] hover:bg-[#8F1D2C] text-white font-mono text-xs font-bold transition-all shadow-md shadow-[#FF3B3F]/20"
                  >
                    🚀 Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
