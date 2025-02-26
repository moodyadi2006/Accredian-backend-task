import { Router } from "express";
import { createReferral } from "../Controller/UserController.js";

const router = Router();

router.post("/", createReferral);

export default router;
