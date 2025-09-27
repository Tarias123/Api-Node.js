import express from 'express';
import cines from './routers/cines.routes.js';
import peliculas from './routers/peliculas.routes.js';

const app = express();


app.use(cines);
app.use(peliculas);

app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
