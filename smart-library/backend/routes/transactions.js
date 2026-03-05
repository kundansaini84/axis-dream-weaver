const router = require("express").Router()
const auth = require("../middleware/auth")
const Book = require("../models/Book")
const Transaction = require("../models/Transaction")

router.get("/", auth, async (_req, res) => {
  try {
    const transactions = await Transaction.find()
      .populate("userId", "name email")
      .populate("bookId", "title author")
      .sort({ createdAt: -1 })

    return res.json(transactions)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
})

router.post("/issue", auth, async (req, res) => {
  try {
    const { userId, bookId } = req.body

    const book = await Book.findById(bookId)
    if (!book) {
      return res.status(404).json({ message: "Book not found" })
    }

    if (book.available <= 0) {
      return res.status(400).json({ message: "Book not available" })
    }

    book.available -= 1
    await book.save()

    const tx = await Transaction.create({
      userId,
      bookId,
      issueDate: new Date(),
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      status: "issued"
    })

    return res.status(201).json(tx)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
})

router.post("/return/:id", auth, async (req, res) => {
  try {
    const tx = await Transaction.findById(req.params.id)
    if (!tx) {
      return res.status(404).json({ message: "Transaction not found" })
    }

    if (tx.status === "returned") {
      return res.status(400).json({ message: "Book already returned" })
    }

    const book = await Book.findById(tx.bookId)
    if (book) {
      book.available += 1
      await book.save()
    }

    const now = new Date()
    const overdueDays = Math.max(0, Math.ceil((now - tx.dueDate) / (1000 * 60 * 60 * 24)))
    tx.returnDate = now
    tx.fine = overdueDays * 2
    tx.status = "returned"

    await tx.save()

    return res.json(tx)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
})

module.exports = router
