import { useRef, MouseEvent, useState } from "react"
import useFetch from "../../hooks/useFetch"
import Timer from "../../components/Timer/Timer"
import "./ForgotPassword.scss"

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

export default function ForgotPassword() {
  // use "useRef" to handle email input value changes
  const emailRef = useRef<HTMLInputElement>(null)

  // use "useState" hook 
  const [emailExists, setEmailExists] = useState<boolean>(false)
  const [btnClicked, setBtnClicked] = useState<boolean>(false)
  const [idValue, setIdValue] = useState<number | null>(null)
  const [newPassword, setNewPassword] = useState<string>("")
  const [done, setDone] = useState<boolean>(true)

  // Use "useFetch" custom hook to handle API requests
  const { data, error } = useFetch("http://localhost:5001/users")
  const { updateInfo } = useFetch(idValue ? `http://localhost:5001/users/${idValue}` : "", "PUT")

  // Use userInformation interface as placeholder type 
  let userData: usersInformation[]
  if (Array.isArray(data)) {
    userData = data
  }

  // Define a function to handle form submit
  const changePassSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setBtnClicked(true)

    if (userData && userData.length !== 0) {
      // Find user object
      const user = userData.find(item => item.email === emailRef.current?.value)

      if (user) {
        // Update states
        setEmailExists(true)
        setIdValue(user.id)

        // Generate a random password
        const createdNumber: number = Math.floor(Math.random() * 100000)
        setNewPassword(`Ashpaz${createdNumber}`)

        // Update user information
        updateInfo({ ...user, "password": `Ashpaz${createdNumber}` })

        // Show Timer
        setDone(false)

        // Timer finishes
        setTimeout(() => {
          setDone(Boolean(localStorage.getItem("timerIsDone")))
        }, 120000)
      } else {
        // When email doesn't exists!
        return setEmailExists(false)
      }
    }
  }

  return (
    <main>
      {error ? <div className="pass-change-err">{error}</div> : null}
      {error ? <div className="pass-change-err-msg">خطایی رخ داده است!<br /> ممکن است اطلاعات به درستی بروزرسانی نشوند.</div> : null}
      <form>
        <div className="change-pass-form-container">
          <h4 className="form-item change-pass-title">جهت تغییر رمز عبور، آدرس ایمیل خود را وارد کنید.</h4>
          <input type="email" name="email" required className="form-item change-pass-input" placeholder="ایمیل" ref={emailRef} />
          <button type="submit" className="form-item change-pass-btn" disabled={!done ? true : false} style={!done ? { opacity: ".5", cursor: "not-allowed" } : { cursor: "pointer" }} onClick={changePassSubmit}>{!done ? <Timer isDone={done} /> : "تغییر رمز عبور"}</button>
          {btnClicked && (emailExists
            ? <div className="message text-success">رمز عبور شما با موفقیت تغییر کرد</div>
            : <div className="message text-danger mb-3">ایمیل وارد شده وجود ندارد!</div>
          )}
          {btnClicked && emailExists && <div className="password-msg my-3"><span className="text-under">رمز عبور جدید:</span> {newPassword}</div>}
        </div>
      </form>
    </main>
  )
}
