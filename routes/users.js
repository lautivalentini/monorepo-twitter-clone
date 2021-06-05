  
const { Router } = require('express')
const router = Router()

router.get('/users', (req, res) => {
  res.json({ msg: 'GET_USERS' })
})

module.exports = router