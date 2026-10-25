import { pool } from "../config/db.js";

export async function listarRecordatorios(userId) {
  const [rows] = await pool.query(
    `SELECT r.*, t.titulo as tarea_titulo 
     FROM recordatorios r
     LEFT JOIN tareas t ON t.id = r.id_tarea
     WHERE t.id_usuario = ? OR r.id_usuario = ?
     ORDER BY r.fecha_hora ASC`,
    [userId, userId]
  );
  return rows;
}

export async function crearRecordatorio({ id_tarea, fecha_hora, nota }) {
  const [result] = await pool.query(
    `INSERT INTO recordatorios (id_tarea, fecha_hora, nota) VALUES (?, ?, ?)`,
    [id_tarea, fecha_hora, nota]
  );
  return { id: result.insertId, id_tarea, fecha_hora, nota };
}

// Alias por si tu código viejo usa otro nombre
export const listarRecordatorio = listarRecordatorios;