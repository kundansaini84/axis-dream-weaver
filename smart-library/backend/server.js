const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const dotenv = require("dotenv")
const connectDB = require("./config/db")

dotenv.config()
connectDB()

const authRoutes = require("./routes/auth")
const bookRoutes = require("./routes/books")
const userRoutes = require("./routes/users")
const transactionRoutes = require("./routes/transactions")

const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "smart-library-backend" })
})

app.use("/api/auth", authRoutes)
app.use("/api/books", bookRoutes)
app.use("/api/users", userRoutes)
app.use("/api/transactions", transactionRoutes)

app.use((err, _req, res, _next) => {
  console.error(err)
  res.status(500).json({ message: "Something went wrong" })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
