const User = require('../models/user')
const bcryptjs = require('bcryptjs')
const { generateJWT } = require('../helpers/generateJwt')
const jwt = require('jsonwebtoken')
const { v4: uuidv4  } = require('uuid');

const createUser = async (req, res) => {
  const { name, phone, password, date, username } = req.body;
  try {
    const user = new User({ name, phone, password, date, username })

    // Encrypt password
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt)

    await user.save()

    res.status(201).json(user)
  } catch (err) {
    console.log(err)
  }
}

const loginUser = async (req, res) => {
  const { phone, password } = req.body

  try {
    const user = await User.findOne({ phone })
    if (!user) {
      return res.status(400).json({ msg: 'An user with this phone does not exists' })
    }

    if (!user.state) {
      return res.status(400).json({ msg: 'Disabled user' })
    }

    const validPassword = bcryptjs.compareSync(password, user.password)
    if (!validPassword) {
      return res.status(400).json({ msg: 'The password are not correct' })
    }

    const token = await generateJWT(user.id)

    res.status(200).json({ user, token })

  } catch (error) {
    res.status(500).json({ msg: 'Ocurred an error while loggin an user' })
  }
}

const listUsers = async (req, res) => {
  const { username } = req.query;
  const query = { username }

  const [total, users] = await Promise.all([
    User.countDocuments(query),
    User.find(query)
  ])

  res.json({ total, users })
}

const validateJwt = async (req, res) => {
  const token = req.header('token')
  if (!token) {
    return res.status(401).json({ msg: 'Invalid token' })
  }
  try {
    const { uid } = jwt.verify(token, process.env.SECRET_KEY)

    const user = await User.findById(uid)

    if (!user) {
      return res.status(401).json({ msg: 'User does not exist' })
    }

    if (!user.state) {
      return res.status(401).json({ msg: 'User is disabled' })
    }

    return res.status(200).json({ user })
  } catch (error) {
    console.log(error)
    res.status(401).json({ msg: 'Invalid token' })
  }
}

const shareTweet = async (req, res) => {
  const { tweet } = req.body
  const { username } = req.query
  console.log(tweet, username)
  try {

    const user = await User.findOne({username})

    if (!user) {
      return res.status(401).json({ msg: 'User does not exist' })
    }

    if (!user.state) {
      return res.status(401).json({ msg: 'User is disabled' })
    }

    const id = uuidv4()

    user.tweets.push({id, tweet})

    await user.save()
    return res.status(201).json({msg: 'saved'})
  } catch (error) {
    console.log(error)
    res.status(401).json({ msg: 'Invalid token' })
  }
}

module.exports = { createUser, loginUser, listUsers, validateJwt, shareTweet }