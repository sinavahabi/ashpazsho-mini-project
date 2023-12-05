import { NavLink } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar"
import useAuth from "../../hooks/useAuth"
import useFetch from "../../hooks/useFetch"
import "./Navbar.scss"

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

export default function Navbar() {
  const { loggedIn, loggedInId } = useAuth()
  const { data } = useFetch("http://localhost:5001/users")
  const { updateInfo } = useFetch(loggedInId ? `http://localhost:5001/users/${loggedInId}` : "", "PUT")

  // Use userInformation interface as placeholder type 
  let userData: usersInformation[]
  if (Array.isArray(data)) {
    userData = data
  }

  const logoutHandler = (): void => {
    if (userData && userData.length !== 0) {
      const user = userData.find(item => item.id === loggedInId)
      if (user) {
        localStorage.setItem("loggedUserStatus", JSON.stringify(false))
        updateInfo({ ...user, "logged-in": false })
        localStorage.clear()
        window.location.reload()
      }
    }
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <NavLink className="menu-items navbar-brand m-0 pe-2" to="/">آشپزشو</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="menu navbar-nav me-auto mb-2 mb-lg-0 flex-grow-1">
              <li className="nav-item">
                <NavLink className="menu-items nav-link" aria-current="page" to="/">خانه</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="menu-items nav-link" to="/my-profile">حساب کاربری</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="menu-items nav-link" to="/about-us">درباره ما</NavLink>
              </li>
            </ul>
            <ul className="menu-register navbar-nav flex-grow-1">
              {loggedIn ? <li className="nav-item">
                <button type="button" className="log-out" onClick={logoutHandler}>خروج</button>
              </li> : <li className="nav-item dropdown">
                <NavLink className="menu-items nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  ورود | ثبت نام
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink className="sign-up-link dropdown-menu-items dropdown-item" to="/sign-up">ثبت نام</NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="login-link dropdown-menu-items dropdown-item" to="/login">ورود</NavLink>
                  </li>
                </ul>
              </li>}
            </ul>
            <SearchBar />
          </div>
        </div>
      </nav>
    </header>
  )
}
