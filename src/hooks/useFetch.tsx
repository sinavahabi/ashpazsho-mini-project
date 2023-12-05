import { useState, useEffect } from "react"

// Define an interface with exact data structure for each user object
interface infoObject {
  id: number,
  name: string,
  "last-name": string,
  email: string,
  password: string,
  "logged-in": boolean,
  recipes: savedRecipe[]
}

// Define a type alias with exact data structure for each recipe object
type savedRecipe = {
  id: number,
  title: string,
  ingredients: string[],
  recipe: string,
  cookingTime: number,
}

type optionsType = {
  method?: string,
  headers?: {},
  body?: string
}

export default function useFetch(url: string, method: string = "GET") {
  // Define "useState" hook values
  const [data, setData] = useState<infoObject | savedRecipe | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState(null)
  const [options, setOption] = useState<optionsType>({})

  // Define a function for 'POST' method
  const saveInfo = (info: infoObject | savedRecipe): void => {
    setOption({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(info)
    })
  }

  // Define a function for 'PUT' method
  const updateInfo = (info: infoObject | savedRecipe): void => {
    setOption({
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(info)
    })
  }

  useEffect(() => {
    async function fetchData(url: string, fetchOptions: optionsType = {}) {
      // Show loading message
      setLoading(true)

      try {
        // Fetch data
        const response: Response = await fetch(url, { ...fetchOptions })

        if (!response.ok) {
          throw new Error(response.statusText)
        }

        // Assign received data when response was successful
        const data: infoObject = await response.json()

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

    // Check if "useFetch" custom hook is called on 'POST', 'PUT or 'GET' method
    if (method === "GET") {
      fetchData(url)
    }

    if (method === "POST" && options) {
      fetchData(url, options)
    }

    if (method === "PUT" && options) {
      fetchData(url, options)
    }
  }, [url, method, options])

  return { data, loading, error, saveInfo, updateInfo }
}
