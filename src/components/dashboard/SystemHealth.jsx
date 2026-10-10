import React from 'react'

export function SystemHealth() {
  const stats = [
    { label: "Status do Servidor", value: "ONLINE (200 OK)", color: "text-green-400" },
    { label: "Linguagem Principal", value: "Python / Apex", color: "text-[#FF3B3F]" },
    { label: "Repositórios Públicos", value: "12+ Repos", color: "text-white" },
    { label: "Latência da API", value: "24ms", color: "text-yellow-400" }
  ]

  const recentActivity = [
    { repo: "matheusbraga-portfolio", commit: "feat: add interactive CLI terminal", time: "Hoje" },
    { repo: "jarvis-assistant", commit: "refactor: optimize audio recognition pipeline", time: "Há 2 dias" },
    { repo: "salesforce-apex-triggers", commit: "feat: add bulkified account handlers", time: "Há 5 dias" }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left my-6">
      {/* Cards de Métricas de Sistema */}
      <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-[#2A2A2E]/60 p-4 rounded-2xl border border-[#8F1D2C]/40 shadow-md"
          >
            <p className="text-xs font-mono text-[#CFCFD4]/60 mb-1">{stat.label}</p>
            <p className={`text-sm sm:text-base font-mono font-bold ${stat.color}`}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Card de Atividade Recente do GitHub */}
      <div className="md:col-span-3 bg-[#2A2A2E]/60 p-6 rounded-2xl border border-[#8F1D2C]/40 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF3B3F]" />
            Atividade Recente (GitHub Feed)
          </h3>
          <span className="text-xs font-mono text-[#CFCFD4]/50">@seu-usuario</span>
        </div>

        <div className="space-y-3">
          {recentActivity.map((item, index) => (
            <div
              key={index}
              className="bg-[#0A0A0C] p-3 rounded-xl border border-[#2A2A2E] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
            >
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-[#FF3B3F]">
                  [{item.repo}]
                </span>
                <p className="text-xs font-mono text-[#CFCFD4]/90">{item.commit}</p>
              </div>
              <span className="text-[10px] font-mono text-[#CFCFD4]/50 whitespace-nowrap">
                {item.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
