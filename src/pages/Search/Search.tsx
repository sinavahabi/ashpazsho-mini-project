import { useLocation } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import RecipeList from "../../components/RecipeList/RecipeList"
import useFetch from "../../hooks/useFetch"
import "./Search.scss"

export default function Search() {
  // Create and set query
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get("q")

  const url = `http://localhost:5000/recipes?q=${query}`
  const { data: searchedData, loading, error } = useFetch(url)

  return (
    <>
      <Navbar />
      <main>
        <h3 className="page-title p-2">دستور پخت‌های شامل: "{query}"</h3>
        {error && <div className="error">{error}</div>}
        {loading && <div className="loading">درحال بارگزاری...</div>}
        {searchedData && <RecipeList recipes={searchedData} />}
      </main>
      <Footer />
    </>
  )
}
