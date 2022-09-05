export const howOldService = async (query) => {
  if (!query.dob) {
    return 'Invalid input'
  }

  const dateOfBirth = new Date(query.dob)

  if (dateOfBirth.toString() === 'Invalid Date') {
    return 'Invalid input'
  }
  return calculateAge(dateOfBirth)
}

function calculateAge (dateOfBirth) {
  // convert the dateofbirth to milliseconds and subtract it from the current time to give the milliseconds difference
  const millisecondsDifferece = Date.now() - new Date(dateOfBirth).getTime()
  const toDateObj = new Date(millisecondsDifferece) // reconvert to date object
  return Math.abs(toDateObj.getUTCFullYear() - 1970) // subtract the year since javascript epoch time
}
