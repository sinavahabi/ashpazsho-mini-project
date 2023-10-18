import { NavLink } from "react-router-dom"
import "./RecipeList.scss"

interface RecipeListProps {
  recipes: {
    id: number,
    title: string,
    ingredients: string[],
    recipe: string,
    cookingTime: number
  }[]
}

export default function RecipeList(props: RecipeListProps) {
  const { recipes } = props;

  return (
    <div className="recipe-list container mx-auto row">
      {recipes.map(recipe => (
        <div className="card-body col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-12 m-4 p-0" key={recipe.id}>
          <h3 className="card-title mb-3 px-2 py-1">{recipe.title}</h3>
          <p className="card-text px-2">{`${recipe.recipe.substr(0, 150)} ...`}</p>
          <div className="card-footer">
            <NavLink className="card-link" to={`/recipes/${recipe.id}`}>پخت این غذا</NavLink>
            <p className="cooking-time m-0">{`${recipe.cookingTime} دقیقه`}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
