const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "")

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: missing token" })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret")
    req.user = decoded
    return next()
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized: invalid token" })
  }
}
