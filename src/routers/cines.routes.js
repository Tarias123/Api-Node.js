import { Router } from "express";
import {getCines} from '../controllers/cines.controller.js';
import {getCine} from '../controllers/cines.controller.js';
import {getTarifas} from '../controllers/cines.controller.js';

const router = Router();

router.get('/cines', getCines);
router.get('/cines/:id', getCine);
router.get('/cines/:id/tarifas', getTarifas);




export default router;