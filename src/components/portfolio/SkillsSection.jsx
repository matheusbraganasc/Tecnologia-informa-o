import React from 'react'
import { skillsData } from '../../data/skills'

export function SkillsSection() {
  return (
    <section className="py-12 border-t border-[#2A2A2E]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 text-left">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Competências & <span className="text-[#FF3B3F]">Tech Stack</span>
          </h2>
          <p className="text-sm text-[#CFCFD4]/70 mt-1 font-mono">
            // Tecnologias, ecossistemas e ferramentas com domínio prático
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        {skillsData.map((group, index) => (
          <div
            key={index}
            className="bg-[#2A2A2E]/60 rounded-2xl p-6 border border-[#8F1D2C]/30 hover:border-[#FF3B3F]/50 transition-all shadow-lg"
          >
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF3B3F]" />
              {group.category}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, skillIdx) => (
                <span
                  key={skillIdx}
                  className="text-xs font-mono font-medium text-[#CFCFD4] bg-[#0A0A0C] px-3 py-1.5 rounded-xl border border-[#8F1D2C]/40 hover:border-[#FF3B3F] transition-all hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
