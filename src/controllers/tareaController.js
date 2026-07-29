const { crearTarea } = require('../models/tareaModel');

async function crear(req, res) {
    try {
        const { titulo, descripcion, estado, fecha_limite } = req.body;

        if (!titulo) {
            return res.status(400).json({ error: 'El campo titulo es obligatorio' });
        }

        const nuevaTarea = await crearTarea({ titulo, descripcion, estado, fecha_limite });

        return res.status(201).json(nuevaTarea);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error al crear la tarea' });
    }
}

module.exports = {
    crear
};