import "./MyRecipe.scss"
import recipeIcon from "../../assets/icons/recipe.svg"

// Define a type alias with exact data structure for each recipe object
type savedRecipe = {
  id: number,
  title: string,
  ingredients: string[],
  recipe: string,
  cookingTime: number
}

type RecipeProp = savedRecipe

export default function MyRecipe(recipe: RecipeProp) {
  return (
    <div className="my-recipes">
      <div className="my-recipes-card my-3">
        <h2 className="my-recipes-card-title">
          {recipe.title}
          <img className="recipe-icon" src={recipeIcon} alt="food" />
        </h2>
        <ul className="my-recipes-card-ingredients">
          مواد لازم:
          {recipe.ingredients.map(ingredient => (
            <li className="my-recipes-card-ingredients-item my-2" key={ingredient}>{ingredient}</li>
          ))}
        </ul>
        <div className="desc-flex d-flex justify-content-space-between align-items-center flex-warp p-2">
          <h3 className="m-3 h3-label">دستورپخت:</h3>
          <p className="my-recipes-card-description m-0">{recipe.recipe}</p>
        </div>
        <h5 className="my-recipes-card-cook-time p-2">زمان پخت: {recipe.cookingTime} دقیقه</h5>
      </div>
    </div>
  )
}
