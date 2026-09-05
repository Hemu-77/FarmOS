import { Router } from "express";
import { register, signIn,getMe } from "../controllers/auth.controllers.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();


router.post('/register', register);
router.post('/signIn', signIn);

router.get("/me", authMiddleware, getMe);

export default router
