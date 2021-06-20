const { Schema, model } = require('mongoose')

const UserSchema = Schema({
  name: {
    type: String,
    required: [true, 'The name is required']
  },
  phone: {
    type: String,
    required: [true, 'The phone is required'],
    unique: true,
  },
  date: {
    type: String,
    required: [true, 'The date is required'],
  },
  password: {
    type: String,
    required: [true, 'The password is required'],
  },
  username: {
    type: String,
    default: 'lau'
  },
  img: {
    type: String,
  },
  state: {
    type: Boolean,
    default: true,
  },
})

UserSchema.methods.toJSON = function () {
  const { __v, password, _id, ...user } = this.toObject();
  user.uid = _id
  return user;
}

module.exports = model('User', UserSchema)