import { useState, FocusEvent, MouseEvent, ChangeEvent } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import "./SignUp.scss"
import mailIcon from "../../assets/icons/mail.svg"

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

export default function SignUp() {
  // Use "useState" hook to store input values
  const [nameValue, setNameValue] = useState<string>("")
  const [lastNameValue, setLastNameValue] = useState<string>("")
  const [emailValue, setEmailValue] = useState<string>("")
  const [passwordValue, setPasswordValue] = useState<string>("")

  // Use "useState" hook to handle error messages data modifications on form validation
  const [nameMsg, setNameMsg] = useState<string>("")
  const [lastNameMsg, setLastNameMsg] = useState<string>("")
  const [emailMsg, setEmailMsg] = useState<string>("")
  const [passwordMsg, setPasswordMsg] = useState<string>("")

  // Use "useState" hook to show success and unsuccess submit messages
  const [success, setSuccess] = useState<boolean>(false)
  const [unsuccess, setUnsuccess] = useState<boolean>(false)

  const navigate = useNavigate()

  // Use "useFetch" custom hook to handle API requests
  const { data, loading: userLoading, error: userError } = useFetch("http://localhost:5001/users")
  const { loading, error, saveInfo } = useFetch("http://localhost:5001/users", "POST")

  // Use userInformation interface as placeholder type 
  let userData: usersInformation[]
  if (Array.isArray(data)) {
    userData = data
  }

  // Create a function to handle and modify input styles when the element is focused in
  const inputFocusIn = (e: FocusEvent<HTMLInputElement>): void => {
    const labelElem = e.currentTarget.previousSibling?.childNodes[0] as HTMLLabelElement
    labelElem.style.top = "-14px"
  }

  // Create a function to handle and modify input styles when the element is focused out
  const inputFocusOut = (e: FocusEvent<HTMLInputElement>): void => {
    const labelElem = e.currentTarget.previousSibling?.childNodes[0] as HTMLLabelElement
    // Check if input is empty to put back the label element into its previous position
    if (e.target.value.length === 0) {
      // Check the window inner width size to put the label element back in previous position properly
      if (window.innerWidth <= 768) {
        labelElem.style.top = "8px"
      } else {
        labelElem.style.top = "16px"
      }
    }
  }

  // Create a function to show/hide password values 
  const showPassword = (e: MouseEvent<HTMLElement>): void => {
    const inputElem = e.currentTarget.parentElement?.previousSibling as HTMLInputElement

    if (inputElem.type === "password" && e.currentTarget.className === "fas fa-lock show-hide-icon") {
      inputElem.type = "text"
      e.currentTarget.className = "fas fa-lock-open show-hide-icon"
    } else {
      inputElem.type = "password"
      e.currentTarget.className = "fas fa-lock show-hide-icon"
    }
  }

  // Create a function to handle API error messages
  const closeErr = (e: MouseEvent<HTMLButtonElement>) => {
    const divElem = e.currentTarget.parentElement as HTMLDivElement
    divElem.hidden = true
  }

  // Create a function to validate input element value changes on the form element
  const formValidator = (e: ChangeEvent<HTMLInputElement>) => {
    // Value missing validation
    if (e.currentTarget.validity.valueMissing) {
      e.currentTarget.style.borderColor = "#ff0a4b"
      switch (e.currentTarget.id) {
        case "name":
          setNameMsg("وارد کردن نام الزمی است!")
          break
        case "last-name":
          setLastNameMsg("وارد کردن نام خانوداگی الزامی است!")
          break
        case "email":
          setEmailMsg("وارد کردن ایمیل الزامی است!")
          break
        default:
          setPasswordMsg("وارد کردن رمز الزامی است!")
          break
      }
    }

    // Too short or too long validation
    if (e.currentTarget.validity.tooShort || e.currentTarget.validity.tooLong) {
      e.currentTarget.style.borderColor = "#ff0a4b"
      e.currentTarget.id === "name" ? setNameMsg("بازه مجاز حروف نام کاربر بین 3 تا 30 حرف شامل حروف فارسی می‌باشد!") : setLastNameMsg("بازه مجاز حروف نام خانوادگی کاربر بین 3 تا 40 حرف شامل حروف فارسی می‌باشد!")
    }

    // Type mismatch validation
    if (e.currentTarget.validity.typeMismatch) {
      e.currentTarget.style.borderColor = "#ff0a4b"
      setEmailMsg("الگوی ایمیل وارد شده صحیح نیست!")
    }

    // Pattern mismatch validation
    if (e.currentTarget.validity.patternMismatch) {
      e.currentTarget.style.borderColor = "#ff0a4b"
      if (e.currentTarget.id === "password") {
        setPasswordMsg("رمز کاربر باید بین 8 تا 16 حرف شامل حروف انگلیسی بزرگ و کوچک و عدد باشد!")
      } else {
        e.currentTarget.id === "name" ? setNameMsg("الگوی وارد شده برای نام کاربر صحیح نیست!") : setLastNameMsg("الگوی وارد شده برای نام خانوادگی کاربر صحیح نیست!")
      }
    }

    // When everything is valid
    if (e.currentTarget.checkValidity()) {
      e.currentTarget.style.borderColor = ""
      switch (e.currentTarget.id) {
        case "name":
          setNameMsg("")
          setNameValue(e.currentTarget.value)
          break
        case "last-name":
          setLastNameMsg("")
          setLastNameValue(e.currentTarget.value)
          break
        case "email":
          setEmailMsg("")
          setEmailValue(e.currentTarget.value)
          break
        default:
          setPasswordMsg("")
          setPasswordValue(e.currentTarget.value)
          break
      }
    }
  }

  // Create a function to handle form submission
  const formSubmit = (e: MouseEvent<HTMLFormElement>) => {
    // Prevent form element default submit action generally
    e.preventDefault()
    const id: number = Math.floor(Math.random() * 100000)

    // Access to submit bUtton with DOM navigation 
    const submitBtn = e.currentTarget.childNodes[0].childNodes[4] as HTMLButtonElement

    // When form validation is confirmed
    if (e.currentTarget.checkValidity()) {
      // Firstly when there is no recent data on JSON server
      if (userData && userData.length === 0) {
        successSubmit(submitBtn, id, e)
      } else {
        // Check if email is not already registered
        const isEmailValid: boolean = userData && userData.some(item => item.email === emailValue)

        if (isEmailValid) {
          setUnsuccess(true)
          return
        } else {
          // All good, submit will occur successfully
          successSubmit(submitBtn, id, e)
          return
        }
      }
    }
  }

  // Create a function to proceed successful submission
  function successSubmit(btnElem: HTMLButtonElement, id: number, event: MouseEvent<HTMLFormElement>): void {
    // Disable submit button
    btnElem.disabled = true
    btnElem.style.cursor = "not-allowed"
    btnElem.style.opacity = ".6"

    // Modify success and unsuccess states
    setUnsuccess(false)
    setSuccess(true)

    // Call post method function and pass desired user data to JSON server
    saveInfo({
      id: id,
      name: nameValue,
      "last-name": lastNameValue,
      email: emailValue,
      password: passwordValue,
      "logged-in": false,
      recipes: []
    })

    // Redirect to login page after one second delay in successful submission
    setTimeout(() => navigate("/login"), 1000)
  }

  return (
    <div className="sign-up">
      <div className={unsuccess ? "submit-msg submit-msg-error" : "submit-msg submit-msg-error hide"}>این ایمیل قبلا ثبت شده است!</div>
      <div className={success ? "submit-msg submit-success" : "submit-msg submit-success hide"}>ثبت نام شما با موفقیت انجام شد</div>
      <form className="sign-up register-account" onSubmit={formSubmit}>
        <div className="form-container">
          {(error || userError) && <div className="submit-err">خطایی رخ داده است! ممکن است درحال حاضر امکان ثبت اطلاعات شما وجود نداشته باشد.</div>}
          <div className="form-item name">
            <div className="label-container name-container">
              <label htmlFor="name">نام</label>
            </div>
            <input type="text" id="name" required minLength={3} max="30" pattern="[آ-ی\s]+" onChange={formValidator} onFocus={inputFocusIn} onBlur={inputFocusOut} />
            <div className="error-message name-err">{nameMsg}</div>
          </div>

          <div className="form-item last-name">
            <div className="label-container last-name-container">
              <label htmlFor="last-name">نام خانوادگی</label>
            </div>
            <input type="text" id="last-name" required minLength={3} max="40" pattern="[آ-ی\s]+" onChange={formValidator} onFocus={inputFocusIn} onBlur={inputFocusOut} />
            <div className="error-message last-name-err">{lastNameMsg}</div>
          </div>

          <div className="form-item email">
            <div className="label-container email-container">
              <label htmlFor="email">ایمیل</label>
            </div>
            <input type="email" id="email" required onChange={formValidator} onFocus={inputFocusIn} onBlur={inputFocusOut} />
            <div className="icon-container email-icon">
              <img src={mailIcon} alt="email-icon" className="email-icon" />
            </div>
            <div className="error-message email-err">{emailMsg}</div>
          </div>

          <div className="form-item password">
            <div className="label-container password-container">
              <label htmlFor="password">رمز</label>
            </div>
            <input type="password" id="password" required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,16}$" onChange={formValidator} onFocus={inputFocusIn} onBlur={inputFocusOut} />
            <div className="icon-container password-icon">
              <i onClick={showPassword} className="fas fa-lock show-hide-icon"></i>
            </div>
            <div className="error-message password-err">{passwordMsg}</div>
          </div>

          <button type="submit" className="submit">
            {(loading || userLoading) ? "" : "ثبت نام"}
            {(loading || userLoading) && <div className="submit-loading spinner-border text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>}
          </button>
          {(error || userError) && <div className="post-err">
            <button type="button" className="close" onClick={closeErr}>
              <i className="fa fa-close"></i>
            </button>
            {error ? error : userError}
          </div>}

          <div className="navigation">
            <div className="navigation-container">
              <p className="login-link-text">قبلا ثبت نام کرده‌اید؟</p>
              <NavLink className="login-link" to="/login">ورود</NavLink>
            </div>
            <div className="navigation-container">
              <p className="forgot-pass-text">رمز خود را فراموش کرده‌ام</p>
              <NavLink className="forgot-pass-link" to="/forgot-password">بازیابی رمز</NavLink>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
