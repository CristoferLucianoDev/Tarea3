# todo-api

API REST para gestion de tareas (To-Do), desarrollada como proyecto practico de la Tarea 3 (Uso de Git y Git Flow) de la asignatura Programacion III.

## Stack

- Node.js
- Express
- MySQL

## Estructura del proyecto

```
todo-api/
  src/
    config/
      db.js
    controllers/
    routes/
    models/
    app.js
  sql/
    schema.sql
  .env.example
  .gitignore
  package.json
```

## Instalacion

1. Clonar el repositorio
2. Ejecutar `npm install`
3. Copiar `.env.example` a `.env` y completar los valores de conexion a MySQL
4. Ejecutar el script `sql/schema.sql` en el servidor de MySQL
5. Ejecutar `npm run dev` para levantar el servidor en modo desarrollo

## Endpoints planificados

| Metodo | Ruta          | Descripcion              |
|--------|---------------|---------------------------|
| GET    | /tareas       | Listar todas las tareas   |
| GET    | /tareas/:id   | Obtener una tarea         |
| POST   | /tareas       | Crear una tarea           |
| PUT    | /tareas/:id   | Actualizar una tarea      |
| DELETE | /tareas/:id   | Eliminar una tarea        |

## Flujo de trabajo

Este proyecto se desarrolla siguiendo Git Flow, con ramas `feature/` para cada funcionalidad, integradas mediante Pull Requests a traves de `dev`, `qa` y `main`.