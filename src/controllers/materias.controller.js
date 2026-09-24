import * as materiasService from "../services/materias.service.js";
import { sendNoContent, sendSuccess } from "../utils/api-response.js";

import{
    validateCreateMateria,
    validateMateriaId,
    validateMateriaListQuery,
    validatePatchMateria
}from "../validators/materias.validator.js";

export async function listMaterias(request, response, next){
    try{
        const filters = validateMateriaListQuery(request.query);
        const result = await materiasService.listMaterias(request.user.id,filters)
        return sendSuccess(response,result.data,200, result.meta);
    }catch(error){
        return next(error);
       }
    }

  export async function getMaterias(request, response, next) {
  try {
    const id = validateMateriaId(request.params.id);
    const materia = await materiasService.getMateriaId(id, request.user.id);
    return sendSuccess(response, meteria);
  } catch (error) {
    return next(error);
  }
}

export async function createMateria(request, response, next) {
  try {
    const payload = validateCreateMateria(request.body);
    const materia = await materiasService.createMateria(request.user.id, payload);
    return sendSuccess(response, materia, 201);
  } catch (error) {
    return next(error);
  }
}

export async function replaceMateria(request, response, next) {
  try {
    const id = validateMateriaId(request.params.id);
    const payload = validateCreateMateria(request.body);
    const materia = await materiasService.replaceMateria(id, request.user_id, payload);
    return sendSuccess(response, materia, 200);
  } catch (error) {
    return next(error);
  }
}

export async function updateMateria(request, response, next) {
  try {
    const id = validateMateriaId(request.params.id);
    const payload = request.body;
    const materia = await materiasService.updateMateria(id, request.user_id, payload);
    return sendSuccess(response, materia, 200);
  } catch (error) {
    return next(error);
  }
}

export async function deleteMateria(request, response, next) {
  try {
    const id = validateMateriaId(request.params.id);
    await materiasService.deleteMateria(id, request.user_id);
    return sendSuccess(response, { id }, 200);
  } catch (error) {
    return next(error);
  }
}
