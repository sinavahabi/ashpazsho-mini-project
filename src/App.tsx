// Import react packages
import { BrowserRouter, Routes, Route } from "react-router-dom"
// Import pages
import MyProfile from "./pages/MyProfile/MyProfile"
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Recipe from "./pages/Recipe/Recipe"
import Search from "./pages/Search/Search"
import SignUp from "./pages/SignUp/SignUp"
import NotFound from "./pages/NotFound/NotFound"
import AboutUs from "./pages/AboutUs/AboutUs"
// Import hooks
import useAuth from "./hooks/useAuth"
//Import styles
import "./App.scss"

export default function App() {
  const { loggedIn } = useAuth()

  return (
    <div id='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/my-profile' element={<MyProfile />} />
          <Route path='/search' element={<Search />} />
          {loggedIn ? <Route path='/' /> : <Route path='/sign-up' element={<SignUp />} />}
          {loggedIn ? <Route path='/' /> : <Route path='/login' element={<Login />} />}
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/recipes/:recipeId' element={<Recipe />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
