import { Router } from 'express';
import sightRouter from './sightRouter'

const router = Router()

router.use('/sight', sightRouter)

export default router