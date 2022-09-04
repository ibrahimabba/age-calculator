import { ValidationError } from '../helpers/errors.js'

export const howOldService = async (query) => {
  if (!query.DOB) {
    throw new ValidationError('No date of birth passed to request')
  }

  const dateOfBirth = new Date(query.DOB)

  if (dateOfBirth.toString() === 'Invalid Date') {
    throw new ValidationError('Invalid date')
  }
  return calculateAge(dateOfBirth)
}

function calculateAge (dateString) {
  const ageDifMs = Date.now() - new Date(dateString).getTime()
  const ageDate = new Date(ageDifMs)
  return Math.abs(ageDate.getUTCFullYear() - 1970)
  // const ageInMilliseconds = new Date() - dateString

  // // convert to years
  // const age = Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365)
  // return age
}
