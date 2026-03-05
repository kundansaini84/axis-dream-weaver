import { NavLink } from "react-router-dom"

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>SmartLibrary</h2>
      <NavLink to="/" end>Dashboard</NavLink>
      <NavLink to="/books">Books</NavLink>
      <NavLink to="/members">Members</NavLink>
    </aside>
  )
}
