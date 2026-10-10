import React from 'react'
import { projectsData } from '../../data/projects'

export function ProjectsGrid() {
  return (
    <section className="py-12 border-t border-[#2A2A2E]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 text-left">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Projetos em <span className="text-[#FF3B3F]">Destaque</span>
          </h2>
          <p className="text-sm text-[#CFCFD4]/70 mt-1 font-mono">
            // Soluções reais, automações e aplicações desenvolvidas
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-[#2A2A2E]/60 rounded-2xl p-6 border border-[#8F1D2C]/30 hover:border-[#FF3B3F]/60 transition-all flex flex-col justify-between group shadow-lg"
          >
            <div>
              {/* Categoria / Tag superior */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono text-[#FF3B3F] bg-[#0A0A0C] px-3 py-1 rounded-full border border-[#8F1D2C]/40 font-bold">
                  {project.category}
                </span>
                {project.highlight && (
                  <span className="text-[10px] font-mono text-[#CFCFD4]/60 uppercase tracking-widest">
                    • Destaque
                  </span>
                )}
              </div>

              {/* Título e Descrição */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FF3B3F] transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-[#CFCFD4]/80 leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div>
              {/* Tags das tecnologias */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono text-[#CFCFD4]/70 bg-[#0A0A0C]/80 px-2.5 py-1 rounded-lg border border-[#2A2A2E]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Botões de Ação */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#2A2A2E]">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center py-2 rounded-xl bg-[#0A0A0C] hover:bg-[#FF3B3F] text-[#CFCFD4] hover:text-white font-mono text-xs font-bold transition-all border border-[#8F1D2C]/40 hover:border-[#FF3B3F]"
                >
                  Repositório
                </a>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center py-2 rounded-xl bg-[#FF3B3F] hover:bg-[#8F1D2C] text-white font-mono text-xs font-bold transition-all shadow-md shadow-[#FF3B3F]/20"
                  >
                    Demo
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
