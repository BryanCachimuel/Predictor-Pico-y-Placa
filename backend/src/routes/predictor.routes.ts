import { Router } from 'express'
const router = Router();

import { obtenerPlacas,crearPlaca } from '../controllers/predictor.controller'
import { validarSchema } from '../middlewares/validarSchema.middleware'
import { CrearPredictorSchema } from '../schema/predictor.schema'

router.get('/listar_verificador', obtenerPlacas)
router.post('/verificador', validarSchema(CrearPredictorSchema), crearPlaca)

export default router