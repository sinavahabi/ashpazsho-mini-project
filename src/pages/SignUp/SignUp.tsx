import { useState } from "react"
import { NavLink } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import "./SignUp.scss"
import mailIcon from "../../assets/icons/mail.svg"

// Define an interface with exact data structure for each user object
interface usersInformation {
  "id": number,
  "name": string,
  "last-name": string,
  "email": string,
  "password": string
}

export default function SignUp() {
  // Use "useState" hook to store input values
  const [nameValue, setNameValue] = useState("")
  const [lastNameValue, setLastNameValue] = useState("")
  const [emailValue, setEmailValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")

  // Use "useState" hook to handle error messages data modifications on form validation
  const [nameMsg, setNameMsg] = useState("")
  const [lastNameMsg, setLastNameMsg] = useState("")
  const [emailMsg, setEmailMsg] = useState("")
  const [passwordMsg, setPasswordMsg] = useState("")

  // Use "useState" hook to show success and unsuccess submit messages
  const [success, setSuccess] = useState(false)
  const [unsuccess, setUnsuccess] = useState(false)

  // Use "useFetch" custom hook to handle API requests
  const { data, loading: userLoading, error: userError } = useFetch("http://localhost:5001/users")
  const { loading, error, saveInfo } = useFetch("http://localhost:5001/users", "POST")

  // Use userInformation interface as placeholder type 
  let userData: null | usersInformation[]
  if (Array.isArray(data) || data === null) {
    userData = data
  }

  // Create a function to handle and modify input styles when the element is focused in
  const inputFocusIn = (e: Event | any): void => {
    const labelElem = e.target.previousSibling.childNodes[0]
    labelElem.style.top = "-14px";
  }

  // Create a function to handle and modify input styles when the element is focused out
  const inputFocusOut = (e: Event | any): void => {
    const labelElem = e.target.previousSibling.childNodes[0]
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
  const showPassword = (e: Event | any): void => {
    const inputElem = e.target.parentElement.previousSibling

    if (inputElem.type === "password" && e.target.className === "fas fa-lock show-hide-icon") {
      inputElem.type = "text"
      e.target.className = "fas fa-lock-open show-hide-icon"
    } else {
      inputElem.type = "password"
      e.target.className = "fas fa-lock show-hide-icon"
    }
  }

  // Create a function to handle API error messages
  const closeErr = (e: Event | any) => e.target.parentElement.parentElement.hidden = true

  // Create a function to validate input element value changes on the form element
  const formValidator = (e: Event | any) => {
    // Value missing validation
    if (e.target.validity.valueMissing) {
      e.target.style.borderColor = "#ff0a4b"
      switch (e.target.id) {
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
    if (e.target.validity.tooShort || e.target.validity.tooLong) {
      e.target.style.borderColor = "#ff0a4b"
      e.target.id === "name" ? setNameMsg("بازه مجاز حروف نام کاربر بین 3 تا 30 حرف شامل حروف فارسی می‌باشد!") : setLastNameMsg("بازه مجاز حروف نام خانوادگی کاربر بین 3 تا 40 حرف شامل حروف فارسی می‌باشد!")
    }

    // Type mismatch validation
    if (e.target.validity.typeMismatch) {
      e.target.style.borderColor = "#ff0a4b"
      setEmailMsg("الگوی ایمیل وارد شده صحیح نیست!")
    }

    // Pattern mismatch validation
    if (e.target.validity.patternMismatch) {
      e.target.style.borderColor = "#ff0a4b"
      if (e.target.id === "password") {
        setPasswordMsg("رمز کاربر باید بین 8 تا 16 حرف شامل حروف انگلیسی بزرگ و کوچک و عدد باشد!")
      } else {
        e.target.id === "name" ? setNameMsg("الگوی وارد شده برای نام کاربر صحیح نیست!") : setLastNameMsg("الگوی وارد شده برای نام خانوادگی کاربر صحیح نیست!")
      }
    }

    // When everything is valid
    if (e.target.checkValidity()) {
      e.target.style.borderColor = ""
      switch (e.target.id) {
        case "name":
          setNameMsg("")
          setNameValue(e.target.value)
          break
        case "last-name":
          setLastNameMsg("")
          setLastNameValue(e.target.value)
          break
        case "email":
          setEmailMsg("")
          setEmailValue(e.target.value)
          break
        default:
          setPasswordMsg("")
          setPasswordValue(e.target.value)
          break
      }
    }
  }

  // Create a function to handle form submission
  const formSubmit = (e: Event | any) => {
    // Prevent form element default submit action generally
    e.preventDefault();
    const id: number = Math.floor(Math.random() * 100000)

    // Access to submit bUtton with DOM navigation 
    const submitBtn: HTMLButtonElement = e.target.childNodes[0].childNodes[4]

    // When form validation is confirmed
    if (e.target.checkValidity()) {
      // Firstly when there is no recent data on JSON server
      if (userData && userData.length === 0) {
        successSubmit(submitBtn, id, e)
      } else {
        // Check if email is not already registered
        const isEmailValid = userData && userData.some(item => item.email === emailValue)

        if (isEmailValid) {
          setUnsuccess(true);
          return "ایمیل قبلا ثبت شده است";
        } else {
          // All good, submit will occur successfully
          successSubmit(submitBtn, id, e);
          return "ایمیل قابل قبول است";
        }
      }
    }
  }

  // Create a function to proceed successful submission
  function successSubmit(btnElem: HTMLButtonElement, id: number, event: Event | any): void {
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
      password: passwordValue
    })

    // Redirect to login page after one second delay in successful submission
    setTimeout(() => event.target.submit(), 1000)
  }

  return (
    <div className="sign-up">
      <div className={unsuccess ? "submit-msg submit-msg-error" : "submit-msg submit-msg-error hide"}>این ایمیل قبلا ثبت شده است!</div>
      <div className={success ? "submit-msg submit-success" : "submit-msg submit-success hide"}>ثبت نام شما با موفقیت انجام شد</div>
      <form action="login" className="sign-up register-account" onSubmit={formSubmit}>
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
