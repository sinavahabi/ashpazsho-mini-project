import { useState } from "react"
import { NavLink } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import "./Login.scss"

// Define an interface with exact data structure for each user object
interface usersInformation {
  "id": number,
  "name": string,
  "last-name": string,
  "email": string,
  "password": string,
  "logged-in": boolean
}

export default function Login() {
  // Use "useState" hook to store input values
  const [emailValue, setEmailValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")
  // const [idValue, setIdValue] = useState<number | null>(null)

  // Use "useState" hook to show success and unsuccess submit messages
  const [success, setSuccess] = useState(false)
  const [unsuccess, setUnsuccess] = useState(false)

  // Use "useFetch" custom hook to handle API requests
  const { data, loading, error } = useFetch("http://localhost:5001/users")
  // const { updateInfo } = useFetch(idValue ? `http://localhost:5001/users/${idValue}` : "", "PUT")

  // Use userInformation interface as placeholder type 
  let userData: null | usersInformation[]
  if (Array.isArray(data) || data === null) {
    userData = data
  }

  // Create a function to show/hide password values 
  const showPassword = (e: Event | any): void => {
    const inputElem = e.target.parentElement.previousSibling

    if (inputElem.type === "password" && e.target.className === "far fa-eye show-hide-icon") {
      inputElem.type = "text"
      e.target.className = "far fa-eye-slash show-hide-icon"
    } else {
      inputElem.type = "password"
      e.target.className = "far fa-eye show-hide-icon"
    }
  }

  // Create a function to save input values
  const inputHandler = (e: Event | any) => e.target.id === "email" ? setEmailValue(e.target.value) : setPasswordValue(e.target.value)

  // Create a function to handle form submission
  const formSubmit = (e: Event | any) => {
    e.preventDefault()

    const submitBtn: HTMLButtonElement = e.target.childNodes[0].childNodes[2]

    if (userData && userData.length !== 0) {
      // const validData: boolean = userData.some(item => item.email === emailValue && item.password === passwordValue)
      const user = userData.find(item => item.email === emailValue && item.password === passwordValue)

      if (user) {
        submitBtn.disabled = true
        submitBtn.style.cursor = "not-allowed"
        submitBtn.style.opacity = ".6"

        // setIdValue(user.id)
        // updateInfo({ ...user, "logged-in": true })
        
        // Set the cookies
        localStorage.setItem("logged-in", JSON.stringify(true))

        setSuccess(true)
        setUnsuccess(false)
        // Redirect to login page after one second delay in successful submission
        setTimeout(() => e.target.submit(), 1000)
      } else {
        setSuccess(false)
        setUnsuccess(true)
      }
    } else {
      setSuccess(false)
      setUnsuccess(true)
    }
  }

  return (
    <div className="login">
      <div className={unsuccess ? "submit-msg submit-msg-error" : "submit-msg submit-msg-error hide"}>ایمیل یا رمز وارد شده صحیح نمی‌باشد!</div>
      <div className={success ? "submit-msg submit-success" : "submit-msg submit-success hide"}>ورود با موفقیت انجام شد</div>
      <div className={error ? "error-info" : "error-info hide"}>خطایی رخ داده است!</div>
      <form action="/" className="login register-account" onSubmit={formSubmit}>
        <div className="form-container">
          <div className="form-item email">
            <input placeholder="ایمیل" type="email" required id="email" onChange={inputHandler} />
          </div>
          <div className="form-item password">
            <input placeholder="رمز" data-login-pass="true" type="password" required id="password" onChange={inputHandler} />
            <div className="icon-container password-icon">
              <i onClick={showPassword} className="far fa-eye show-hide-icon"></i>
            </div>
          </div>
          <button type="submit" className="submit">
            {loading ? "" : "ورود"}
            {loading && <div className="submit-loading spinner-border text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>}
          </button>
          <div className="navigation">
            <div className="navigation-container">
              <p className="login-link-text">هنوز ثبت نام نکرده‌اید؟</p>
              <NavLink className="login-link" to="/sign-up">ثبت نام</NavLink>
            </div>
            <div className="navigation-container">
              <p className="forgot-pass-text">رمز خود را فراموش کرده‌ام</p>
              <NavLink className="forgot-pass-link" to="/forgot-password">بازیابی رمز</NavLink>
            </div>
          </div>
        </div>
      </form>
      <div className={error ? "login-fetch-error" : "login-fetch-error hide"}>{error}</div>
    </div>
  )
}
