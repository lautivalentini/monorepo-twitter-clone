const validatePhone = (phone) => {
  var regex = /^\+[1-9]\d{6,14}$/g;
  if (regex.test(phone)) {
    return true
  } else {
    return false
  }
}

export default validatePhone