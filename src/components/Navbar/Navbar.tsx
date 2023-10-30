import { NavLink } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar"
import useAuth from "../../hooks/useAuth"
import "./Navbar.scss"

export default function Navbar() {
  const { loggedIn } = useAuth()

  const logoutHandler = () => {
    localStorage.setItem("logged-in", JSON.stringify(false))
    window.location.reload()
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
                <NavLink className="menu-items nav-link" to="/create">دستورپخت من</NavLink>
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
