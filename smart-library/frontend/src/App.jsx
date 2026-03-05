import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import Dashboard from "./pages/Dashboard"
import Books from "./pages/Books"
import Members from "./pages/Members"
import Login from "./pages/Login"

function PrivateLayout() {
  const token = localStorage.getItem("token")

  if (!token) {
    return <Navigate to="/login" replace />
  }

  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/books" element={<Books />} />
          <Route path="/members" element={<Members />} />
        </Routes>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<PrivateLayout />} />
      </Routes>
    </BrowserRouter>
  )
}
