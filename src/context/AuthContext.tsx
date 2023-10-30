import { createContext, ReactNode } from "react"

const loggedIn: string | null = JSON.parse(localStorage.getItem("logged-in") || "false");

// Should define the right user loggedIn property to begin with
export const AuthContext = createContext({ loggedIn: loggedIn })

export function AuthProvider({ children }: { children: ReactNode }) {
  return (
    <AuthContext.Provider value={{  loggedIn: loggedIn  }}>
      {children}
    </AuthContext.Provider>
  )
}