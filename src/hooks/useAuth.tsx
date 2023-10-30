import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export default function useAuth() {
  const context = useContext(AuthContext)

  if (context === undefined || context === null) {
    throw new Error("useAuth hook must be used inside a AuthProvider")
  }

  return context
}
