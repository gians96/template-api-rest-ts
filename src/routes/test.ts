import { Router } from "express";
import { testCtrl } from "../controllers/test.ctrl";
const router = Router();

/*
 * http://localhost:3010/auth/register [POST]
 */
router.post("/register", testCtrl);

export { router };