import React, { useState, useEffect } from 'react'

export function SystemHealth() {
  const [commits, setCommits] = useState([])
  const [loadingCommits, setLoadingCommits] = useState(true)
  const [latency, setLatency] = useState('0ms')
  const [status, setStatus] = useState('ONLINE (200 OK)')

  const username = 'matheusbraganasc'

  useEffect(() => {
    // Função para medir a latência real em tempo real
    const measureLatency = () => {
      const start = performance.now()
      fetch('/favicon.ico', { method: 'HEAD', cache: 'no-store' })
        .then(() => {
          const end = performance.now()
          setLatency(`${Math.round(end - start)}ms`)
          setStatus('ONLINE (200 OK)')
        })
        .catch(() => {
          setLatency('Offline')
          setStatus('ERROR (500)')
        })
    }

    // Mede imediatamente ao carregar o componente
    measureLatency()

    // Atualiza a latência continuamente a cada 3 segundos
    const interval = setInterval(measureLatency, 3000)

    // Buscar eventos e commits reais da API do GitHub
    async function fetchGithubActivity() {
      try {
        const res = await fetch(`https://api.github.com/users/${username}/events/public`)
        if (!res.ok) throw new Error('Falha ao buscar dados do GitHub')
        const data = await res.json()

        // Filtrar apenas os eventos de Push (Commits)
        const pushEvents = data
          .filter(event => event.type === 'PushEvent')
          .slice(0, 5) // Pega os últimos 5
          .map(event => {
            const repoName = event.repo.name.replace(`${username}/`, '')
            const commitMessage = event.payload.commits?.[0]?.message || 'Atualização de código'
            const eventDate = new Date(event.created_at).toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: '2-digit'
            })

            return {
              repo: repoName,
              commit: commitMessage,
              time: eventDate
            }
          })

        setCommits(pushEvents)
      } catch (err) {
        console.error(err)
      } finally {
        setLoadingCommits(false)
      }
    }

    fetchGithubActivity()

    // Limpa o intervalo ao desmontar/sair da tela
    return () => clearInterval(interval)
  }, [])

  const stats = [
    { label: "Status do Servidor", value: status, color: "text-green-400" },
    { label: "Linguagem Principal", value: "Python / Apex", color: "text-[#FF3B3F]" },
    { label: "Perfil do GitHub", value: `@${username}`, color: "text-white" },
    { label: "Latência Real", value: latency, color: "text-yellow-400" }
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

      {/* Feed ao Vivo do GitHub */}
      <div className="md:col-span-3 bg-[#2A2A2E]/60 p-6 rounded-2xl border border-[#8F1D2C]/40 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF3B3F] animate-pulse" />
            Atividade Recente (GitHub Feed Real)
          </h3>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono text-[#FF3B3F] hover:underline"
          >
            @{username}
          </a>
        </div>

        {loadingCommits ? (
          <p className="text-xs font-mono text-[#CFCFD4]/60 py-4 text-center">
            Carregando commits em tempo real do GitHub...
          </p>
        ) : commits.length > 0 ? (
          <div className="space-y-3">
            {commits.map((item, index) => (
              <div
                key={index}
                className="bg-[#0A0A0C] p-3 rounded-xl border border-[#2A2A2E] flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-[#8F1D2C]/60 transition-all"
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
        ) : (
          <p className="text-xs font-mono text-[#CFCFD4]/60 py-4 text-center">
            Nenhum commit recente encontrado na API do GitHub.
          </p>
        )}
      </div>
    </div>
  )
}
