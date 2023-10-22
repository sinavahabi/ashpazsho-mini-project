import { NavLink } from "react-router-dom"

import "./NotFound.scss"
import notFountIcon from "../../assets/icons/code-alert.svg"

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="error-container">
        <img className="not-found-icon" src={notFountIcon} alt="not-found" />
        <p className="not-found-text">صفحه مورد نظر شما پیدا نشد!</p>
        <NavLink className="not-found-link" to={"/"}>بازگشت به صفحه اصلی</NavLink>
      </div>
    </div>
  )
}
