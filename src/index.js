import express from 'express';
import cines from './routers/cines.routes.js';
import peliculas from './routers/peliculas.routes.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set('view engine', 'ejs');
app.set('views','./src/views');
app.use(express.static('src/public'));                                                        
app.get('/', (req, res) => {
  res.render('index', { titulo: 'Inicio' });
});

app.get('/cines', (req, res) => {
  res.render('cines', { titulo: 'Nuestros Cines' });
});

app.get('/peliculas', (req, res) => {
  res.render('peliculas', { titulo: 'Cartelera' });
});

app.get('/peliculas/:id', (req, res) => {
  res.render('pelicula', { titulo: 'Detalle de la Película' });
});

app.get('/cines', (req, res) => {
  res.render('cine', { titulo: 'Cine' });
});

app.get('/cines/:id', (req, res) => {
  res.render('cine', { titulo: 'Detalle del Cine' });
});




app.use(cines);
app.use(peliculas);


app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
