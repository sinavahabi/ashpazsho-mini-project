import { useParams } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import useFetch from "../../hooks/useFetch"
import "./Recipe.scss"

export default function Recipe() {
  const { id } = useParams()
  const url: string = `http://localhost:5000/recipes/${id}`
  const { data: recipe, loading, error }: any = useFetch(url)

  return (
    <>
      <Navbar />
      <main>
        <div className="recipe">
          {error && <div className="error">{error}</div>}
          {loading && <div className="loading">درحال بارگزاری...</div>}
          {recipe && (
            <>
              <h2 className="recipe-title">{recipe.title}</h2>
              <p className="recipe-text">{recipe.recipe}</p>
              <ul className="recipe-ingredients">
                {recipe.ingredients.length > 0 ? recipe.ingredients.map((ingredient: string) => <li key={ingredient}>{ingredient}</li>) : <li>مواد لازم برای این دستور پخت درنظر گرفته نشده است!</li>}
              </ul>
              <p className="recipe-cooking-time">{`${recipe.cookingTime} دقیقه زمان می‌برد`}</p>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
