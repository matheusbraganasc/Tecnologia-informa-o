import React, { useState } from 'react'

export function SpotifyWidget() {
  // Lista de faixas/playlists para alternar no player real
  const tracks = [
    { name: "M4rkim / Geek Rap", id: "0v9W29m98Co21S3dsxXU9I" }, // ID de exemplo do Spotify
    { name: "Yago Oproprio", id: "37i9dQZF1DXcBWAsP3121B" },
    { name: "Cyberpunk 2077 OST", id: "1YNfL619b068W1K8vR716p" }
  ]

  const [selectedTrack, setSelectedTrack] = useState(tracks[0].id)

  return (
    <div className="bg-[#2A2A2E]/60 p-6 rounded-2xl border border-[#8F1D2C]/40 shadow-lg text-left my-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
          <h3 className="text-lg font-bold text-white">Spotify Real Player</h3>
        </div>
        <span className="text-xs font-mono text-[#CFCFD4]/50">// Stream On-Demand</span>
      </div>

      {/* Seletor de Faixas */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tracks.map((track, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedTrack(track.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
              selectedTrack === track.id
                ? 'bg-[#FF3B3F] text-white font-bold shadow-md shadow-[#FF3B3F]/20'
                : 'bg-[#0A0A0C] text-[#CFCFD4]/70 hover:text-white border border-[#2A2A2E]'
            }`}
          >
            🎵 {track.name}
          </button>
        ))}
      </div>

      {/* Player do Spotify Integrado */}
      <div className="rounded-xl overflow-hidden border border-[#2A2A2E]">
        <iframe
          style={{ borderRadius: '12px' }}
          src={`https://open.spotify.com/embed/track/${selectedTrack}?utm_source=generator&theme=0`}
          width="100%"
          height="152"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify Player"
        />
      </div>
    </div>
  )
}
