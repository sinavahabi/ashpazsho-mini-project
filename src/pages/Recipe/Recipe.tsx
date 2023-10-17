import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import "./Recipe.scss"

export default function Recipe() {
  const { id } = useParams()
  const url: string = `http://localhost:8000/recipes/${id}`
  const { data: recipe, loading, error }: any = useFetch(url)

  return (
    <div className="recipe">
      {error && <div className="error">{error}</div>}
      {loading && <div className="loading">Loading...</div>}
      {recipe && (
        <>
          <h2 className="recipe-title">{recipe.title}</h2>
          <p className="recipe-text">{recipe.recipe}</p>
          <ul className="recipe-ingredients">
            {recipe.ingredients.map((ingredient: string) => <li key={ingredient}>{ingredient}</li>)}
          </ul>
          <p className="recipe-cooking-time">{`${recipe.cookingTime} دقیقه زمان می‌برد`}</p>
        </>
      )}
    </div>
  )
}
