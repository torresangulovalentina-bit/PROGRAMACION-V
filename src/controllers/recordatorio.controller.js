import * as recordatorioRepo from "../repositories/recordatorio.repository.js";

export async function listar(req, res, next) {
  try {
    const userId = req.user?.id || 1;
    const data = await recordatorioRepo.listarRecordatorios(userId);
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
}

export async function crear(req, res, next) {
  try {
    const { id_tarea, fecha_hora, nota } = req.body;
    const result = await recordatorioRepo.crearRecordatorio({ id_tarea, fecha_hora, nota });
    res.status(201).json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
}