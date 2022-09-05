import { howOldService } from '../services/howOldService.js'

export const howOldController = async (req, res, next) => {
  try {
    const response = await howOldService(req.query)
    if (response !== 'Invalid input') {
      res.status(200).json({
        success: true,
        message: 'Age calculated successfully',
        status: 200,
        data: { age: response }
      })
    } else {
      res.status(400).json('Invalid input')
    }
  } catch (error) {
    next(error)
  }
}
