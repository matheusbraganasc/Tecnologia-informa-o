import React, { createContext, useContext, useState, useEffect } from 'react'

const ViewContext = createContext()

export function ViewProvider({ children }) {
  // Busca o valor salvo ou usa 'portfolio' como padrão
  const [activeView, setActiveView] = useState(() => {
    return localStorage.getItem('activeView') || 'portfolio'
  })

  // Salva no localStorage sempre que a aba mudar
  useEffect(() => {
    localStorage.setItem('activeView', activeView)
  }, [activeView])

  return (
    <ViewContext.Provider value={{ activeView, setActiveView }}>
      {children}
    </ViewContext.Provider>
  )
}

export function useView() {
  return useContext(ViewContext)
}
