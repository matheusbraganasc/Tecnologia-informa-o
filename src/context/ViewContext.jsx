import { createContext, useContext, useState } from 'react'

const ViewContext = createContext()

export function ViewProvider({ children }) {
  // 'portfolio' ou 'dashboard'
  const [activeView, setActiveView] = useState('portfolio')

  return (
    <ViewContext.Provider value={{ activeView, setActiveView }}>
      {children}
    </ViewContext.Provider>
  )
}

export function useView() {
  return useContext(ViewContext)
}
