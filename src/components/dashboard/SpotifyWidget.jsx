import React, { useState } from 'react'

export function SpotifyWidget() {
  // Playlists reais do Matheus Braga
  const playlists = [
    {
      name: "My Music",
      type: "playlist",
      id: "03uO4XYH0UMrZn3Bj3njhL"
    },
    {
      name: "Animes",
      type: "playlist",
      id: "6ePD7yF7TU2C0bzXnw2mgQ"
    }
  ]

  const [selectedPlaylist, setSelectedPlaylist] = useState(playlists[0])

  return (
    <div className="bg-[#2A2A2E]/60 p-5 sm:p-6 rounded-2xl border border-[#8F1D2C]/40 shadow-lg text-left my-6">
      {/* Topo do Widget */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
          <h3 className="text-base sm:text-lg font-bold text-white">Spotify Integration</h3>
        </div>
        <span className="text-xs font-mono text-[#CFCFD4]/50">// Personal Playlists</span>
      </div>

      {/* Botões de Seleção de Playlists */}
      <div className="flex flex-wrap gap-2 mb-4">
        {playlists.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedPlaylist(item)}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              selectedPlaylist.id === item.id
                ? 'bg-[#FF3B3F] text-white font-bold shadow-md shadow-[#FF3B3F]/20'
                : 'bg-[#0A0A0C] text-[#CFCFD4]/70 hover:text-white border border-[#2A2A2E]'
            }`}
          >
            🎧 {item.name}
          </button>
        ))}
      </div>

      {/* Reprodução do Spotify Embed */}
      <div className="rounded-xl overflow-hidden border border-[#2A2A2E] bg-[#0A0A0C]">
        <iframe
          style={{ borderRadius: '12px' }}
          src={`https://open.spotify.com/embed/${selectedPlaylist.type}/${selectedPlaylist.id}?utm_source=generator&theme=0`}
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify Embed"
        />
      </div>
    </div>
  )
}
