import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import React from "react"
import "./RecipeList.scss"

type RecipeListProps = {
  users: {
    id: number
    name: string
    "last-name": string
    email: string
    password: string
    "logged-in": boolean
    recipes: savedRecipe[]
  }[]
}

// Define a type alias with exact data structure for each recipe object
type savedRecipe = {
  id: number
  title: string
  ingredients: string[]
  recipe: string
  cookingTime: number
}

export default function RecipeList(props: RecipeListProps) {
  const [empty, setEmpty] = useState<boolean>(false)
  const { users } = props

  useEffect(() => {
    setEmpty(users.length === 0)
  }, [users])

  return (
    <div className="recipe-list container mx-auto row">
      {empty ? (
        <div className="message">اطلاعاتی برای نمایش وجود ندارد!</div>
      ) : (
        users.map((user) => (
          <React.Fragment key={user.id}>
            {user.recipes.map((recipe) => (
              <div className="card-body col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-12 m-4 p-0" key={recipe.id}>
                <h4 className="user-family">
                  <i className="fas fa-user-circle recipe-profile"></i>
                  {user.name} {user["last-name"]}
                </h4>
                <h3 className="card-title mb-3 px-2 py-1">{recipe.title}</h3>
                <p className="card-text px-2">{`${recipe.recipe.slice(0, 150)} ...`}</p>
                <div className="card-footer">
                  <NavLink className="card-link" to={`recipes/${recipe.id}`}>پخت این غذا</NavLink>
                  <p className="cooking-time m-0">{`${recipe.cookingTime} دقیقه`}</p>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))
      )}
    </div>
  )
}
