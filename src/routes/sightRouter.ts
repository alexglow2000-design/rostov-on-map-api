import { Router } from 'express'
import SightController from '../controllers/sightController'

const router = Router()
const { getAll, getOne } = new SightController()

router.get('/', getAll);
// router.post('/', create);
router.get('/:id', getOne);
// router.post('/:id', updateOne);
// router.delete('/:id', deleteOne);

export default router