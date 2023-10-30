import { NavLink } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import useAuth from "../../hooks/useAuth"
import "./Create.scss"

export default function Create() {
  const { loggedIn } = useAuth()

  return (
    <>
      <Navbar />
      <main>
        {loggedIn ?
          <div>
            Create
          </div> : <div className="not-logged-in-container">
            <div className="not-logged-in">
              برای ورود به این بخش ابتدا باید وارد حساب کاربری خود شوید!
            </div>
            <NavLink to="../login" className="login-page">
              ورود به اکانت 
            </NavLink>
          </div>}
      </main>
      <Footer />
    </>
  );
}
