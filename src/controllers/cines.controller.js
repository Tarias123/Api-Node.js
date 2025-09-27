import { pool } from '../../db/db.js';

export const getCines = ( async (req, res) => {
  try {
    const [rows] = await pool.query('CALL sp_getCines()');
    res.json(rows); 
  } catch (error) {
    console.error('Error al obtener cines:', error);
    res.status(500).json({ error: 'Error al obtener los cines' });
  }
});

export const getCine = ( async (req, res) => {
  const { id } = req.params;
    try {
        const [rows] = await pool.query('CALL sp_getCine(?)', [id]);
        if (rows[0].length === 0) {
            return res.status(404).json({ message: 'Cine no encontrado' });
        }
        res.json(rows[0]);
    } catch (error) {
        console.error('Error al obtener el cine:', error);
        res.status(500).json({ error: 'Error al obtener el cine' });
    }   
});

export const getTarifas = ( async (req, res) => {
    const { id } = req.params; 
  try {
    const [rows] = await pool.query('CALL sp_getCineTarifas(?)', [id]);
      if (rows[0].length === 0) {
          return res.status(404).json({ message: 'Cine no encontrado' });
      }
    res.json(rows); 
    } catch (error) {
    console.error('Error al obtener las tarifas del cine:', error);
    res.status(500).json({ error: 'Error al obtener las tarifas del cine' });
  }
});
