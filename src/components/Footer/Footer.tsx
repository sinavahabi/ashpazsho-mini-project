import { NavLink } from "react-router-dom"
import { JalaliDateTime } from "@webilix/jalali-date-time"
import "./Footer.scss"
import dateIcon from "../../assets/icons/date.svg"

export default function Footer() {
  const jalali = JalaliDateTime()
  // Add some configuration to make sure date is returned with persian font 
  const persianDate: string = jalali.now({
    timezone: 'Asia/Tehran',
    locale: 'fa',
    format: 'Y-M-D H:I',
  })

  const currentDate = String(persianDate).slice(0, 10)

  return (
    <footer>
      <div className="footer">
        <div className="author">
          <NavLink className="author" to={"https://github.com/sinavahabi"} target="_blank">
            مولف: سینا وهبی ذاتی
          </NavLink>
        </div>
        <div className="footer-center d-flex align-items-center flex-wrap">
          <div className="social-media d-flex flex-wrap align-items-center">
            <NavLink className="social-media-link" to={"https://www.instagram.com/"} target="_blank">
              <i className="fab fa-instagram"></i>
            </NavLink>
            <NavLink className="social-media-link" to={"https://telegram.org/"} target="_blank">
              <i className="fab fa-telegram-plane"></i>
            </NavLink>
            <NavLink className="social-media-link" to={"https://twitter.com/"} target="_blank">
              <i className="fab fa-twitter"></i>
            </NavLink>
            <NavLink className="social-media-link" to={"https://www.facebook.com/"} target="_blank">
              <i className="fab fa-facebook"></i>
            </NavLink>
          </div>
          <div className="copyright">
            تمامی حقوق این وبسایت متعلق به اپلیکیشن آشپزشو می‌باشد.
          </div>
        </div>
        <div className="date">
          {currentDate}
          <img src={dateIcon} alt="date" />
        </div>
      </div>
    </footer>
  )
}
