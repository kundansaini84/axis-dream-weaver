const router = require("express").Router()
const auth = require("../middleware/auth")
const User = require("../models/User")

router.get("/", auth, async (_req, res) => {
  try {
    const users = await User.find().select("-password").sort({ createdAt: -1 })
    return res.json(users)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
})

module.exports = router
