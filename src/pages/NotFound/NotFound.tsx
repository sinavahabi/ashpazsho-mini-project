import "./NotFound.scss"
import notFountIcon from "../../assets/icons/code-alert.svg"

export default function NotFound() {
  return (
    <div className="not-found-container">
      <img className="not-found-icon" src={notFountIcon} alt="not-found" />
      <p className="not-found">صفحه مورد نظر شما پیدا نشد!</p>
    </div>
  )
}
