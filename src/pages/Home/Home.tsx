import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import RecipeList from "../../components/RecipeList/RecipeList"
import useFetch from "../../hooks/useFetch"
import "./Home.scss"

export default function Home() {
  const { data, loading, error } = useFetch("http://localhost:5000/recipes")

  return (
    <>
      <Navbar />
      <main>
        <div className="home">
          {error && <div className="error">{error}</div>}
          {loading && <div className="loading">درحال بارگزاری...</div>}
          {data && <RecipeList recipes={data} />}
        </div>
      </main>
      <Footer />
    </>
  )
}
