import request from 'supertest'
import { describe, expect, test } from '@jest/globals'
import app from '../../app.js'

describe('Test /howold route', function () {
  test('responds to /howold', async () => {
    const res = await request(app).get('/howold?dob=02/02/1996')
    expect(res.statusCode).toBe(200)
    expect(res.body).toEqual({
      success: true,
      message: 'Age calculated successfully',
      status: 200,
      data: { age: 26 }
    })
  })
})
