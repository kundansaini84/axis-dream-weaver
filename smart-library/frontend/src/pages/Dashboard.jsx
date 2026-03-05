import { useEffect, useMemo, useState } from "react"
import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js"
import { api } from "../api"

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)

export default function Dashboard() {
  const [books, setBooks] = useState([])
  const [members, setMembers] = useState([])
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    Promise.all([api.getBooks(), api.getUsers(), api.getTransactions()])
      .then(([b, u, t]) => {
        setBooks(b)
        setMembers(u)
        setTransactions(t)
      })
      .catch(() => {})
  }, [])

  const chartData = useMemo(() => ({
    labels: ["Books", "Members", "Transactions"],
    datasets: [
      {
        label: "System Overview",
        data: [books.length, members.length, transactions.length],
        backgroundColor: ["#2563eb", "#14b8a6", "#f59e0b"]
      }
    ]
  }), [books.length, members.length, transactions.length])

  return (
    <div>
      <h1>Library Dashboard</h1>
      <div className="card-grid">
        <div className="card"><h3>Total Books</h3><p>{books.length}</p></div>
        <div className="card"><h3>Total Members</h3><p>{members.length}</p></div>
        <div className="card"><h3>Total Transactions</h3><p>{transactions.length}</p></div>
      </div>
      <div className="card" style={{ marginTop: 14 }}>
        <Bar data={chartData} />
      </div>
    </div>
  )
}
