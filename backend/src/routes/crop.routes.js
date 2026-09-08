import { Router } from "express";
import { addCrop, deleteCrop, getAllCrop, getOneCrop, updateCropField } from "../controllers/crop.controllers.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

router.post('/:farmId/fields/:fieldId/crop',authMiddleware, addCrop);
router.get('/:farmId/fields/:fieldId/crop',authMiddleware, getAllCrop);
router.get('/:farmId/fields/:fieldId/crop/:cropId',authMiddleware, getOneCrop);
router.patch('/:farmId/fields/:fieldId/crop/:cropId',authMiddleware, updateCropField);
router.delete('/:farmId/fields/:fieldId/crop/:cropId',authMiddleware, deleteCrop);

export default router;