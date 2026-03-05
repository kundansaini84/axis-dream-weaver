const router = require("express").Router()
const Book = require("../models/Book")
const auth = require("../middleware/auth")

router.get("/", auth, async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 })
    return res.json(books)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
})

router.post("/", auth, async (req, res) => {
  try {
    const book = await Book.create(req.body)
    return res.status(201).json(book)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
})

module.exports = router
