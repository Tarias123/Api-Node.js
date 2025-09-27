import { Router } from "express";
import {getPeliculas} from '../controllers/peliculas.controller.js';
import {getPelicula} from '../controllers/peliculas.controller.js';

const router = Router();
router.get('/peliculas', getPeliculas);
router.get('/peliculas/:id', getPelicula);


export default router;
