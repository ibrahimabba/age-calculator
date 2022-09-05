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

function calculateAge (dateString) {
  const ageDifMs = Date.now() - new Date(dateString).getTime()
  const ageDate = new Date(ageDifMs)
  return Math.abs(ageDate.getUTCFullYear() - 1970)
}
