import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../api"

export default function Login() {
  const [email, setEmail] = useState("admin@smartlibrary.com")
  const [password, setPassword] = useState("admin123")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    setError("")
    try {
      const data = await api.login({ email, password })
      localStorage.setItem("token", data.token)
      localStorage.setItem("user", JSON.stringify(data.user))
      navigate("/")
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="auth-shell">
      <form className="auth-card" onSubmit={submit}>
        <h1>SmartLibrary Login</h1>
        <p>Use your admin account to access the dashboard.</p>
        <div style={{ marginBottom: 10 }}>
          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required />
        </div>
        {error && <p style={{ color: "crimson" }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
