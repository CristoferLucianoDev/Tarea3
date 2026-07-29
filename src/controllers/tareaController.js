const { crearTarea, obtenerTareas, obtenerTareaPorId, actualizarTarea, eliminarTarea } = require('../models/tareaModel');

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

async function listar(req, res) {
    try {
        const tareas = await obtenerTareas();
        return res.status(200).json(tareas);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error al listar las tareas' });
    }
}

async function obtenerPorId(req, res) {
    try {
        const { id } = req.params;
        const tarea = await obtenerTareaPorId(id);

        if (!tarea) {
            return res.status(404).json({ error: 'Tarea no encontrada' });
        }

        return res.status(200).json(tarea);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error al obtener la tarea' });
    }
}

async function actualizar(req, res) {
    try {
        const { id } = req.params;
        const { titulo, descripcion, estado, fecha_limite } = req.body;

        const tareaExistente = await obtenerTareaPorId(id);
        if (!tareaExistente) {
            return res.status(404).json({ error: 'Tarea no encontrada' });
        }

        if (!titulo) {
            return res.status(400).json({ error: 'El campo titulo es obligatorio' });
        }

        await actualizarTarea(id, { titulo, descripcion, estado, fecha_limite });

        const tareaActualizada = await obtenerTareaPorId(id);
        return res.status(200).json(tareaActualizada);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error al actualizar la tarea' });
    }
}

async function eliminar(req, res) {
    try {
        const { id } = req.params;

        const tareaExistente = await obtenerTareaPorId(id);
        if (!tareaExistente) {
            return res.status(404).json({ error: 'Tarea no encontrada' });
        }

        await eliminarTarea(id);

        return res.status(200).json({ mensaje: 'Tarea eliminada correctamente' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error al eliminar la tarea' });
    }
}

module.exports = {
    crear,
    listar,
    obtenerPorId,
    actualizar,
    eliminar
};