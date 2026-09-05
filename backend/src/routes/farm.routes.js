import { createFarm, getFarms, getFarmById, updateFarm, deleteFarm } from "../controllers/farm.controllers.js";
import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

router.post('/newfarm',authMiddleware,createFarm);
router.get('/',authMiddleware,getFarms);
router.get("/:farmId",authMiddleware,getFarmById);
router.patch("/:farmId", authMiddleware,updateFarm);
router.delete("/:farmId",authMiddleware,deleteFarm)

export default router;