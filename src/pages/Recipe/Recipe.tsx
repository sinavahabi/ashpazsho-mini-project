import { useParams } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import useFetch from "../../hooks/useFetch"
import "./Recipe.scss"

// Define an interface with exact data structure for each user object
interface infoObject {
  id: number,
  name: string,
  "last-name": string,
  email: string,
  password: string,
  "logged-in": boolean
}

// Define a type alias with exact data structure for each recipe object
type savedRecipe = {
  id: number,
  title: string,
  ingredients: string[],
  recipe: string,
  cookingTime: number,
}

interface RecipeType {
  id: number,
  title: string,
  ingredients: string[],
  recipe: string,
  cookingTime: number,
}

type InfoType = infoObject | savedRecipe

export default function Recipe() {
  const { recipeId } = useParams()
  const url: string = `http://localhost:5000/recipes/${recipeId}`
  const { data: recipe, loading, error } = useFetch(url)

  // Type guard function to check if 'ingredients' property exists
  const hasIngredients = (recipe: InfoType): recipe is RecipeType => {
    return 'ingredients' in recipe
  }

  return (
    <>
      <Navbar />
      <main>
        <div className="recipe">
          {error && <div className="error">{error}</div>}
          {loading && <div className="loading">در حال بارگزاری...</div>}
          {recipe && hasIngredients(recipe) && (
            <>
              <h3 className="user-info">{}</h3>
              <h2 className="recipe-title">{recipe.title}</h2>
              <p className="recipe-text">{recipe.recipe}</p>
              <ul className="recipe-ingredients">
                {recipe.ingredients.length > 0 ? recipe.ingredients.map((ingredient: string) => <li key={ingredient}>{ingredient}</li>) : <li>مواد لازم برای این دستور پخت در نظر گرفته نشده است!</li>}
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
