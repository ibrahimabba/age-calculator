import { howOldService } from '../services/howOldService.js'

export const howOldController = async (req, res, next) => {
  try {
    const age = await howOldService(req.query)
    res.json({
      success: typeof age === 'number',
      message: typeof age === 'number' ? 'Age calculated successfully' : 'Invalid input',
      status: typeof age === 'number' ? 200 : 400,
      data: { ...(typeof age === 'number' && { age }) }
    })
  } catch (error) {
    next(error)
  }
}
