const { Router } = require('express')
const { check } = require('express-validator')
const { validateFields } = require('../server/middlewares/validateFields')
const { validatePhone } = require('../server/helpers/validators')
const { createUser, loginUser, listUsers, validateJwt } = require('../server/controllers/userController')

const router = Router()

router.post('/create', [
  check('name', 'The name is required').not().isEmpty(),
  check('phone', 'The phone is required').not().isEmpty(),
  check('phone').custom(validatePhone),
  check('date', 'The date is required').not().isEmpty(),
  validateFields
], createUser)

router.post('/auth/login', [
  check('phone', 'The phone is required').not().isEmpty(),
  check('password', 'The password is required').not().isEmpty(),
  validateFields
], loginUser)

router.get('/list', listUsers)

router.get('/auth/validate', validateJwt)

module.exports = router