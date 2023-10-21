// Import react packages
import { BrowserRouter, Routes, Route } from "react-router-dom"
// Import pages
import Create from "./pages/Create/Create"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Recipe from "./pages/Recipe/Recipe"
import Search from "./pages/Search/Search"
import SignUp from "./pages/SignUp/SignUp"
import NotFound from "./pages/NotFound/NotFound"
import AboutUs from "./pages/AboutUs/AboutUs"
//Import styles
import "./App.scss"

export default function App() {
  return (
    <div id='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/search' element={<Search />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/recipes/:id' element={<Recipe />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
