import { useState, useEffect } from "react"

export default function useFetch(url: string) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData() {
      // Loading message before asynchronous process begins
      setLoading(true)

      try {
        // Fetch data
        const response = await fetch(url)

        if (!response.ok) {
          throw new Error(response.statusText)
        }

        // Assign received data when response was successful
        const data = await response.json()

        setLoading(false)
        setData(data)
      } catch (err: any) {
        // Stop loading message and show error message
        setLoading(false)
        setError(err.message)
      }
    }

    fetchData()
  }, [url])

  return { data, loading, error }
}
