import { useState, useEffect } from "react"

// Define an interface with exact data structure for each user object
interface infoObject {
  "id": number,
  "name": string,
  "last-name": string,
  "email": string,
  "password": string
}

export default function useFetch(url: string, method: string = "GET") {
  // Define "useState" hook values
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [options, setOption] = useState({})

  // Define a function for 'POST' method
  const saveInfo = (info: infoObject): void => {
    setOption({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(info)
    })
  }

  useEffect(() => {
    async function fetchData(url: string, fetchOptions: object = {}) {
      // Show loading message
      setLoading(true)

      try {
        // Fetch data
        const response = await fetch(url, { ...fetchOptions })

        if (!response.ok) {
          throw new Error(response.statusText)
        }

        // Assign received data when response was successful
        const data = await response.json()

        // Stop showing loading message and also error message for insurance, then add new received data with useState hook 
        setLoading(false)
        setError(null)
        setData(data)
      } catch (err: any) {
        // Stop loading message and show error message
        setLoading(false)
        setError(err.message)
      }
    }

    // Check if "useFetch" custom hook is called on 'POST' method or 'GET' method
    if (method === "GET") {
      fetchData(url)
    }

    if (method === "POST" && options) {
      fetchData(url, options)
    }
  }, [url, method, options])

  return { data, loading, error, saveInfo }
}
