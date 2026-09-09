import { Router } from "express";
import { addField, getAllFields, getOneField, updateField,deleteField } from "../controllers/field.controllers.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { validatePolygonBody } from "../middleware/validateGeoJSON.middleware.js";


const router = Router();

router.post('/:farmId/fields', authMiddleware,validatePolygonBody, addField);
router.get('/:farmId/fields', authMiddleware, getAllFields);
router.get('/:farmId/fields/:fieldId', authMiddleware, getOneField);
router.patch('/:farmId/fields/:fieldId', authMiddleware, updateField);
router.delete('/:farmId/fields/:fieldId', authMiddleware, deleteField);


export default router;