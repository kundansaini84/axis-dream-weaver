const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api"

const authHeader = () => {
  const token = localStorage.getItem("token")
  return token ? { Authorization: `Bearer ${token}` } : {}
}

export const api = {
  async login(payload) {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })
    if (!res.ok) throw new Error("Invalid credentials")
    return res.json()
  },
  async getBooks() {
    const res = await fetch(`${API_URL}/books`, { headers: authHeader() })
    if (!res.ok) throw new Error("Failed to load books")
    return res.json()
  },
  async addBook(payload) {
    const res = await fetch(`${API_URL}/books`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...authHeader() },
      body: JSON.stringify(payload)
    })
    if (!res.ok) throw new Error("Failed to add book")
    return res.json()
  },
  async getUsers() {
    const res = await fetch(`${API_URL}/users`, { headers: authHeader() })
    if (!res.ok) throw new Error("Failed to load members")
    return res.json()
  },
  async getTransactions() {
    const res = await fetch(`${API_URL}/transactions`, { headers: authHeader() })
    if (!res.ok) throw new Error("Failed to load transactions")
    return res.json()
  }
}
