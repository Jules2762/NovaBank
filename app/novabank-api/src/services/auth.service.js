const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const users = [] // temporaire (plus tard DB)

exports.register = async ({ email, password }) => {
  const exists = users.find(u => u.email === email)
  if (exists) throw new Error("User already exists")

  const hashed = await bcrypt.hash(password, 10)

  const user = {
    id: Date.now(),
    email,
    password: hashed
  }

  users.push(user)

  return { id: user.id, email: user.email }
}

exports.login = async ({ email, password }) => {
  const user = users.find(u => u.email === email)
  if (!user) throw new Error("Invalid credentials")

  const match = await bcrypt.compare(password, user.password)
  if (!match) throw new Error("Invalid credentials")

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  )

  return {
    token
  }
}