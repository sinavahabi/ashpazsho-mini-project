import { useLocation } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import AllRecipes from "../../components/AllRecipes/AllRecipes"
import useFetch from "../../hooks/useFetch"
import "./Search.scss"

// Define a type alias with exact data structure for each recipe object
type Recipe = {
  id: number
  title: string
  ingredients: string[]
  recipe: string
  cookingTime: number
}

export default function Search() {
  // Create and set query
  const queryString: string = useLocation().search
  const queryParams: URLSearchParams = new URLSearchParams(queryString)
  const query: string | null = queryParams.get("q")

  const url: string = `http://localhost:5000/recipes?q=${query}`
  const { data: searchedData, loading, error } = useFetch(url)
  const recipes: Recipe[] = Array.isArray(searchedData) ? searchedData : []

  return (
    <>
      <Navbar />
      <main>
        <h3 className="page-title p-2">دستور پخت‌های شامل: "{query}"</h3>
        {error && <div className="error">{error}</div>}
        {loading && <div className="loading">در حال بارگزاری...</div>}
        {searchedData && (
          <AllRecipes recipes={recipes} />
        )}
      </main>
      <Footer />
    </>
  )
}
