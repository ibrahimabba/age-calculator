import { ValidationError } from '../helpers/errors.js'

export const howOldService = async (query) => {
  if (!query.dob) {
    throw new ValidationError('No date of birth passed to request')
  }

  const dateOfBirth = new Date(query.dob)

  if (dateOfBirth.toString() === 'Invalid Date') {
    throw new ValidationError('Invalid date')
  }
  return calculateAge(dateOfBirth)
}

function calculateAge (dateString) {
  const ageInMilliseconds = new Date() - dateString

  // convert to years
  const age = Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365)
  return age
}
