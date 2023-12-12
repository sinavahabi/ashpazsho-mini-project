/*
  Program Topic: Ashpazsho Application Website
  Author: sina vahabi
  Copyright: 2023/12
*/

import React from "react"
import ReactDOM from "react-dom/client"
import { AuthProvider } from "./context/AuthContext"
import App from "./App"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap/dist/js/bootstrap"
import "bootstrap/dist/css/bootstrap.rtl.min.css"
import "./index.scss"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement)
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
)
