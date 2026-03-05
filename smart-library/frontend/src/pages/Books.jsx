import { useEffect, useState } from "react"
import { api } from "../api"

const initialBook = { title: "", author: "", category: "", isbn: "", copies: 1, available: 1 }

export default function Books() {
  const [books, setBooks] = useState([])
  const [book, setBook] = useState(initialBook)

  const loadBooks = async () => {
    const data = await api.getBooks()
    setBooks(data)
  }

  useEffect(() => {
    loadBooks()
  }, [])

  const submit = async (e) => {
    e.preventDefault()
    await api.addBook({ ...book, copies: Number(book.copies), available: Number(book.available) })
    setBook(initialBook)
    loadBooks()
  }

  return (
    <div>
      <h1>Books</h1>
      <form onSubmit={submit} className="card" style={{ marginBottom: 14 }}>
        <div className="form-grid">
          {Object.keys(initialBook).map((key) => (
            <div key={key}>
              <label style={{ textTransform: "capitalize" }}>{key}</label>
              <input
                value={book[key]}
                onChange={(e) => setBook({ ...book, [key]: e.target.value })}
                required
              />
            </div>
          ))}
        </div>
        <button type="submit">Add Book</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>ISBN</th>
            <th>Copies</th>
            <th>Available</th>
          </tr>
        </thead>
        <tbody>
          {books.map((b) => (
            <tr key={b._id}>
              <td>{b.title}</td>
              <td>{b.author}</td>
              <td>{b.category}</td>
              <td>{b.isbn}</td>
              <td>{b.copies}</td>
              <td>{b.available}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
