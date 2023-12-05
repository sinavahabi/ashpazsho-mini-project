import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import "./AllRecipes.scss"

type Recipe = {
  id: number
  title: string
  ingredients: string[]
  recipe: string
  cookingTime: number
}

type RecipeListProps = {
  recipes: Recipe[]
}

export default function RecipeList(props: RecipeListProps) {
  const [empty, setEmpty] = useState<boolean>(false)
  const { recipes } = props
  const navigate = useNavigate()

  useEffect(() => {
    setEmpty(recipes.length === 0)
  }, [recipes])

  const handleNavLinkClick = (recipeId: number) => {
    // Navigate to the desired URL without the "/search" prefix
    navigate(`/recipes/${recipeId}`)
  }

  return (
    <div className="recipe-list container mx-auto row">
      {empty ? (
        <div className="message">اطلاعاتی برای نمایش وجود ندارد!</div>
      ) : (
        recipes.map((recipe) => (
          <div className="card-body col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-12 m-4 p-0" key={recipe.id}>
            <h3 className="card-title mb-3 px-2 py-1">{recipe.title}</h3>
            <p className="card-text px-2">{`${recipe.recipe.slice(0, 150)} ...`}</p>
            <div className="card-footer">
              <span className="card-link" onClick={() => handleNavLinkClick(recipe.id)}>پخت این غذا</span>
              <p className="cooking-time m-0">{`${recipe.cookingTime} دقیقه`}</p>
            </div>
          </div>
        ))
      )}
    </div>
  )
}
