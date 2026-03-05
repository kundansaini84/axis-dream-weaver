const router = require("express").Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/User")

router.post("/register", async (req, res) => {
  try {
    const { name, email, password, role } = req.body

    if (!name || !email || !password) {
      return res.status(400).json({ message: "name, email and password are required" })
    }

    const existing = await User.findOne({ email })
    if (existing) {
      return res.status(409).json({ message: "User already exists" })
    }

    const hash = await bcrypt.hash(password, 10)
    const user = await User.create({ name, email, password: hash, role: role || "admin" })

    return res.status(201).json(user)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
})

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" })
    }

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) {
      return res.status(401).json({ message: "Invalid credentials" })
    }

    const token = jwt.sign(
      { id: user._id, role: user.role, email: user.email },
      process.env.JWT_SECRET || "secret",
      { expiresIn: process.env.JWT_EXPIRES_IN || "1d" }
    )

    return res.json({ token, user: user.toJSON() })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
})

module.exports = router
