import { NavLink, useNavigate } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import useAuth from "../../hooks/useAuth"
import useFetch from "../../hooks/useFetch"
import { useState, useRef, useEffect, MouseEvent, ChangeEvent } from "react"
import "./MyProfile.scss"
import MyRecipe from "../../components/MyRecipe/MyRecipe"

// Define an interface with exact data structure for each user object
interface usersInformation {
  id: number,
  name: string,
  "last-name": string,
  email: string,
  password: string,
  "logged-in": boolean,
  recipes: savedRecipe[]
}

// Define a type alias with exact data structure for each recipe object
type savedRecipe = {
  id: number,
  title: string,
  ingredients: string[],
  recipe: string,
  cookingTime: number
}

// Define the aliases type
type booleanArr = {
  title: boolean,
  ingredients: boolean,
  recipe: boolean,
  cookingTime: boolean
}

export default function MyProfile() {
  const { loggedIn, loggedInId } = useAuth()
  const navigate = useNavigate()

  // Use "useRef" hook
  const titleRef = useRef<HTMLInputElement>(null)
  const ingredientsRef = useRef<HTMLInputElement>(null)
  const recipeRef = useRef<HTMLTextAreaElement>(null)
  const cookingTimeRef = useRef<HTMLInputElement>(null)

  // Use "useState" hook
  const [isEmpty, setIsEmpty] = useState<boolean>(true)
  const [isValid, setIsValid] = useState<booleanArr>({
    title: true,
    ingredients: true,
    recipe: true,
    cookingTime: true
  })
  const [isValidNum, setIsValidNum] = useState<boolean>(true)
  const [isValidRecipe, setIsValidRecipe] = useState<boolean>(true)
  const [isValidTitle, setIsValidTitle] = useState<boolean>(true)
  const [isValidForm, setIsValidForm] = useState<{ invalidMessage: boolean, validMessage: boolean }>({
    invalidMessage: false,
    validMessage: false
  })
  const [ingredients, setIngredients] = useState<string[]>([])
  const [showForm, setShowForm] = useState<boolean>(false)
  const [showMyRecipes, setShowMyRecipes] = useState<boolean>(false)

  // Use "useFetch" custom hook to handle API requests
  const { data, loading: recipesLoading, error: recipesError } = useFetch("http://localhost:5001/users")
  const { loading, error, updateInfo } = useFetch(loggedInId ? `http://localhost:5001/users/${loggedInId}` : "", "PUT")
  const { saveInfo, loading: addLoading, error: addError } = useFetch("http://localhost:5000/recipes", "POST")

  // Use userInformation interface as placeholder type 
  let userData: usersInformation[] = []
  if (Array.isArray(data)) {
    userData = data
  }

  // Define a function to handle create recipe form
  const createFormHandler = () => {
    showForm ? setShowForm(false) : setShowForm(true)
  }

  // Define a function to handle each user's personal recipe list
  const myRecipesHandler = () => {
    showMyRecipes ? setShowMyRecipes(false) : setShowMyRecipes(true)
  }

  // Define a function to check and focus on input elements with empty values
  const focusOnEmptyInput = () => {
    if (!cookingTimeRef.current?.value) {
      cookingTimeRef.current?.focus()
    }

    if (!recipeRef.current?.value) {
      recipeRef.current?.focus()
    }

    if (!titleRef.current?.value) {
      titleRef.current?.focus()
    }
  }

  // Use "useEffect" hook to rerender based on dependencies modifications
  useEffect(() => {
    focusOnEmptyInput()
  }, [titleRef, recipeRef, cookingTimeRef])

  // Define a function to check all input elements validity and handle submit process 
  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault()
    focusOnEmptyInput()

    const validForm: boolean = Object.values(isValid).every((value) => value) && isValidTitle && isValidRecipe && isValidNum

    if (!isEmpty) {
      if (validForm) {
        setIsValidForm({ invalidMessage: false, validMessage: true })

        // Disable submit button
        const btn = e.currentTarget
        btn.disabled = true
        btn.style.cursor = "not-allowed"
        btn.style.opacity = ".6"

        // Create a random id number
        const createdId: number = Math.floor(Math.random() * 100000)

        // Use the functional form of setRecipeInfo to ensure working with the latest state
        const updatedRecipeInfo = {
          id: createdId,
          title: titleRef.current?.value || "",
          ingredients: ingredients,
          recipe: recipeRef.current?.value || "",
          cookingTime: cookingTimeRef.current?.value ? parseInt(cookingTimeRef.current?.value) : 0,
        }

        // Wait for the state to be updated before calling saveInfo
        await new Promise((resolve) => setTimeout(resolve, 0))

        // Get current user information and check the id to update user personal recipes properly
        if (userData && userData.length !== 0) {
          const userIndex = userData.findIndex((item) => item.id === loggedInId)

          // Avoid overwriting user previous personal recipes with following logic and update recipes
          if (userIndex !== -1) {
            const updatedUser = {
              ...userData[userIndex],
              recipes: [...userData[userIndex].recipes, updatedRecipeInfo],
            }

            // Update the user information
            userData[userIndex] = updatedUser
            // Send the updated user information to the server
            updateInfo(updatedUser)
            saveInfo(updatedRecipeInfo)
          }
        }

        setTimeout(() => {
          navigate('/')
        }, 1500)
      } else {
        setIsValidForm({ invalidMessage: true, validMessage: false })
      }
    }
  }

  // Define a function check all input values validity
  const handleInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // Check if value is empty
    if (e.currentTarget.value.length === 0 && e.currentTarget.name !== "ingredients") {
      const name: string = e.currentTarget.name
      setIsValid({ ...isValid, [name]: false })
    } else {
      const name: string = e.currentTarget.name
      setIsValid({ ...isValid, [name]: true })
    }

    // Check if the title input element value length is not less than 3 characters 
    if (e.currentTarget.id === "title-input") {
      e.currentTarget.value.length < 3 ? setIsValidTitle(false) : setIsValidTitle(true)
    }

    // Check if the recipe input element value length is not less than 10 characters 
    if (e.currentTarget.id === "recipe-input") {
      e.currentTarget.value.length < 10 ? setIsValidRecipe(false) : setIsValidRecipe(true)
    }

    // Check if the cooking time input element number is not less than 3
    if (e.currentTarget.type === "number") {
      Number(e.currentTarget.value) < 3 ? setIsValidNum(false) : setIsValidNum(true)
    }

    // Update isEmpty state
    const empty: boolean = !cookingTimeRef.current?.value || !recipeRef.current?.value || !titleRef.current?.value
    setIsEmpty(empty)
  }

  // Define a function to add new ingredients
  const addIngredients = (e: MouseEvent<HTMLButtonElement>) => {
    const newIngredient = ingredientsRef.current?.value

    if (newIngredient && !ingredients.includes(newIngredient)) {
      setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    // Clear the input value after value has been added by clicking on the "add ingredient" button
    const inputElement = e.currentTarget.previousSibling as HTMLInputElement
    inputElement.value = ""
  }

  return (
    <>
      <Navbar />
      <main>
        {loggedIn ?
          <>
            <div className="buttons-container">
              <button className="create-recipe-page-btn show-my-recipes" onClick={myRecipesHandler}>{showMyRecipes ? "عدم نمایش دستورپخت‌های من" : "نمایش دستورپخت‌های من"}</button>
              <button className="create-recipe-page-btn show-create-form" onClick={createFormHandler}>{showForm ? "عدم نمایش دستورپخت جدید" : "اضافه کردن دستورپخت جدید"}</button>
            </div>
            {addLoading && <div className="loading mt-5">درحال بارگزاری...</div>}
            {addError && <div className="error mt-5">{addError}</div>}
            {showForm ? <div className="create-recipe">
              {error && <div className="recipe-submit-err top">{error}</div>}
              <form className="create-recipe">
                <div className="form-container">
                  <header>
                    <h2 className="add-recipe-header text-muted">
                      اضافه کردن دستور پخت جدید!
                    </h2>
                  </header>
                  <div className="form-item">
                    <label htmlFor="title-input">عنوان:</label>
                    <input type="text" ref={titleRef} id="title-input" name="title" onChange={handleInput} style={!isValid.title || !isValidTitle ? { borderColor: "#ff0a4b" } : { borderColor: "" }} />
                    {!isValid.title ? <div className="validity-message">مقدار نمی‌تواند خالی باشد!</div> : !isValidTitle ? <div className="validity-message">عنوان نمی‌تواند کم‌تر از 3 حرف باشد!</div> : null}
                  </div>
                  <div className="form-item ingredients-form-item">
                    <label htmlFor="ingredients-input" className="ingredients-label">مواد لازم:</label>
                    <input type="text" ref={ingredientsRef} id="ingredients-input" name="ingredients" onChange={handleInput} style={!isValid.ingredients ? { borderColor: "#ff0a4b" } : { borderColor: "" }} />
                    <button type="button" className="add-ingredients" onClick={addIngredients}>اضافه کردن</button>
                    {ingredients.length > 0 ? <div className="show-ingredients text-muted text-center">
                      {ingredients.map(ingredient => <span className="show-ingredients-item" key={ingredient}>{ingredient}, </span>)}
                    </div> : null}
                  </div>
                  <div className="form-item">
                    <label htmlFor="recipe-input">دستور پخت:</label>
                    <textarea ref={recipeRef} id="recipe-input" name="recipe" onChange={handleInput} style={!isValid.recipe || !isValidRecipe ? { borderColor: "#ff0a4b" } : { borderColor: "" }} />
                    {!isValid.recipe ? <div className="validity-message">مقدار نمی‌تواند خالی باشد!</div> : !isValidRecipe ? <div className="validity-message">دستور پخت نمی‌تواند کم‌تر از 10 حرف باشد!</div> : null}
                  </div>
                  <div className="form-item">
                    <label htmlFor="cooking-time-input">زمان پخت:</label>
                    <input type="number" ref={cookingTimeRef} id="cooking-time-input" name="cookingTime" onChange={handleInput} style={!isValid.cookingTime || !isValidNum ? { borderColor: "#ff0a4b" } : { borderColor: "" }} />
                    {!isValid.cookingTime ? <div className="validity-message">مقدار نمی‌تواند خالی باشد!</div> : !isValidNum ? <div className="validity-message">مدت زمان پخت نمی‌تواند کم‌تر از 3 دقیقه باشد!</div> : null}
                  </div>
                  <button type="submit" className="add-recipe" onClick={handleSubmit}>
                    {loading ? <div className="submit-loading spinner-border text-light" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div> : 'ثبت'}
                  </button>
                  {error && <div className="recipe-submit-err bottom">خطایی رخ داده است. ممکن است در حال حاضر اطلاعات به درستی ثبت نشوند!</div>}
                </div>
              </form>
              <div className={isValidForm.invalidMessage ? `msg invalid-recipe-form-msg show` : `msg invalid-recipe-form-msg`} >اطلاعات فرم را به درستی پر کنید!</div>
              <div className={isValidForm.validMessage && !loading ? `msg valid-recipe-form-msg show` : `msg valid-recipe-form-msg`} >دستور پخت شما ثبت شد!</div>
              <div className="clearfix"></div>
            </div> : null}
            {recipesLoading && <div className="loading mt-5">درحال بارگزاری...</div>}
            {recipesError && <div className="error mt-5">{recipesError}</div>}
            {showMyRecipes ? <div className="row container mx-auto mt-4">
              {
                userData && userData.length !== 0 ? (
                  userData.find((item) => item.id === loggedInId)?.recipes.map((recipe) => (
                    <MyRecipe key={recipe.id} {...recipe} />
                  ))
                ) : <div className="message">اطلاعاتی برای نمایش وجود ندارد!</div>
              }
            </div>
              : null}
          </> : <div className="not-logged-in-container">
            <div className="not-logged-in">
              برای ورود به این بخش ابتدا باید وارد حساب کاربری خود شوید!
            </div>
            <NavLink to="../login" className="login-page">
              ورود به اکانت
            </NavLink>
          </div>}
      </main >
      <Footer />
    </>
  )
}
