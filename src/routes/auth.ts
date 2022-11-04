import { Router } from "express";
import { registerCtrl, loginCtrl } from "../controllers/auth.ctrl";

const router = Router();

/*
 * http://localhost:3010/auth/register [POST]
 */
router.post("/register", registerCtrl);

/**
 * http://localhost:3010/auth/login [POST]
 */
router.post("/login", loginCtrl);

export { router };