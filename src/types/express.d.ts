import 'express'
import { JwtPayLoad } from './types'

declare module 'express-serve-static-core' {
  interface Request {
    user?: JwtPayLoad
  }
}
