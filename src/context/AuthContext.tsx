import { createContext, ReactNode } from "react"

const loggedIn: boolean | null = JSON.parse(localStorage.getItem("loggedUserStatus") || "false")
const loggedInId: number | null = JSON.parse(localStorage.getItem("loggedUserId") || "false")

// Should define the right user loggedIn property to begin with
export const AuthContext = createContext({ loggedIn: loggedIn, loggedInId: loggedInId })

export function AuthProvider({ children }: { children: ReactNode }) {
  return (
    <AuthContext.Provider value={{ loggedIn: loggedIn, loggedInId: loggedInId }}>
      {children}
    </AuthContext.Provider>
  )
}