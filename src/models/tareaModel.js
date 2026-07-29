const pool = require('../config/db');

async function crearTarea({ titulo, descripcion, estado, fecha_limite }) {
    const [resultado] = await pool.query(
        `INSERT INTO tareas (titulo, descripcion, estado, fecha_limite)
         VALUES (?, ?, ?, ?)`,
        [titulo, descripcion, estado || 'pendiente', fecha_limite || null]
    );

    return {
        id: resultado.insertId,
        titulo,
        descripcion,
        estado: estado || 'pendiente',
        fecha_limite: fecha_limite || null
    };
}

async function obtenerTareas() {
    const [filas] = await pool.query('SELECT * FROM tareas ORDER BY fecha_creacion DESC');
    return filas;
}

async function obtenerTareaPorId(id) {
    const [filas] = await pool.query('SELECT * FROM tareas WHERE id = ?', [id]);
    return filas[0] || null;
}

module.exports = {
    crearTarea,
    obtenerTareas,
    obtenerTareaPorId
};