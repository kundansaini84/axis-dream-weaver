import { useNavigate } from "react-router-dom"

export default function Navbar() {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    navigate("/login")
  }

  const user = JSON.parse(localStorage.getItem("user") || "{}")

  return (
    <div className="navbar">
      <strong>Welcome, {user.name || "Admin"}</strong>
      <button onClick={logout}>Logout</button>
    </div>
  )
}
