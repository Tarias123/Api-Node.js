import express from 'express';
import cines from './routers/cines.routes.js';
import peliculas from './routers/peliculas.routes.js';
import { pool } from '../db/db.js';

const app = express();

app.set('view engine', 'ejs');
app.set('views','./src/views');
app.use(express.static('src/public'));                                                        
app.get('/', (req, res) => {
  res.render('index', { titulo: 'Inicio' });
});

app.get('/cines', async (req, res) => {
  const [rows] = await pool.query('CALL sp_getCines()');
  res.render('cines', { titulo: 'Nuestros Cines', cines:  rows[0] });
});

app.get('/peliculas', async (req, res) => {
  const [rows] = await pool.query('CALL sp_getPeliculass()');
  res.render('peliculas', { titulo: 'Cartelera', peliculas: rows[0] });
});


app.get('/peliculas/:id', async (req, res) => {
  const { id } = req.params;
  const [rows] = await pool.query('CALL sp_getPelicula(?)', [id]);
  res.render('pelicula', { titulo: 'Detalle de la Película', pelicula: rows[0][0] });
});

app.get('/cine/:id', (req, res) => {
  res.render('cine', { titulo: 'Detalle del Cine', cine: [0][0] });
});


//para usar las apis de cines y peliculas
/* app.use(cines);
app.use(peliculas); */



app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
