import { pool } from '../../db/db.js';

export const getPeliculas = ( async (req, res) => {
  try {
    const [rows] = await pool.query('call sp_getPeliculass()');
    res.json(rows); 
    } catch (error) {
    console.error('Error al obtener peliculas:', error);
    res.status(500).json({ error: 'Error al obtener las peliculas' });
  }
});

export const getPelicula = ( async (req, res) => {
    const { id } = req.params;
        try {
            const [rows] = await pool.query('CALL sp_getPelicula(?)', [id]);
            if (rows[0].length === 0) {
                return res.status(404).json({ message: 'Pelicula no encontrada' });
            }
            res.json(rows[0]);
        } catch (error) {
            console.error('Error al obtener la pelicula:', error);
            res.status(500).json({ error: 'Error al obtener la pelicula' });
        }   
    });
