import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import '@fortawesome/fontawesome-free/css/all.min.css'
import "bootstrap/dist/js/bootstrap"
import "bootstrap/dist/css/bootstrap.rtl.min.css"
import "./index.scss"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
