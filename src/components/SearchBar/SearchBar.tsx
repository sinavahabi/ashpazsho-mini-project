import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./SearchBar.scss"

export default function SearchBar() {
  const [term, setTerm] = useState("")
  const navigate = useNavigate()

  // Create a function to handle search bar submit and search navigation
  const handleSearch = (e: any): void => {
    e.preventDefault()

    navigate(`/search?q=${term}`)
  }

  return (
    <div className="searchbar">
      <form className="search-form d-flex" onSubmit={handleSearch} >
        <input className="search-input form-control me-2" onChange={e => setTerm(e.target.value)} type="search" placeholder="جستجو" aria-label="Search" required />
        <button className="search-btn btn btn-outline-light">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  )
}