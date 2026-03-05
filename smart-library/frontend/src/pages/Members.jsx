import { useEffect, useState } from "react"
import { api } from "../api"

export default function Members() {
  const [members, setMembers] = useState([])

  useEffect(() => {
    api.getUsers().then(setMembers).catch(() => {})
  }, [])

  return (
    <div>
      <h1>Members</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {members.map((m) => (
            <tr key={m._id}>
              <td>{m.name}</td>
              <td>{m.email}</td>
              <td>{m.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
