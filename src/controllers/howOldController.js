import { howOldService } from '../services/howOldService.js'

export const howOldController = async (req, res, next) => {
  try {
    const age = await howOldService(req.params)
    res.status(200).json({
      success: true,
      message: 'Age calculated successfully',
      status: 200,
      data: { age }
    })
  } catch (error) {
    next(error)
  }
}
