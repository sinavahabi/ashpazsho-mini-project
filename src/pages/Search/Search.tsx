import { useLocation } from "react-router-dom"
import RecipeList from "../../components/RecipeList/RecipeList"
import useFetch from "../../hooks/useFetch"
import "./Search.scss"

export default function Search() {
  // Create and set query
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get("q")

  const url = `http://localhost:8000/recipes?q=${query}`
  const { data: searchedData, loading, error } = useFetch(url)

  return (
    <div>
      <h2 className="page-title">دستور پخت‌های شامل: "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {loading && <p className="loading">Loading...</p>}
      {searchedData && <RecipeList recipes={searchedData} />}
    </div>
  )
}
