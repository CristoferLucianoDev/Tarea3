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

module.exports = {
    crearTarea
};