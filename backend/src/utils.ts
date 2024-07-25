import jwt from 'jsonwebtoken'
import { User } from './models/User'

export const generateToken = (user: User) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET || '17410e52f5368b49985fbab9dbccdedec135f42b5b731604251e329d4b0f2cc8b6fc238bf557e8300ea5ca83a83caa7bf8cbf179201dbccf9115bd6d0349de04',
    {
      expiresIn: '30d',
    }
  )
}