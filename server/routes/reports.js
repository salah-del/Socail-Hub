import express from "express";
import { report } from "../controllers/report.js";
import { getUserHistory } from "../controllers/report.js";

import {verifyToken} from "../verifyToken.js"

const router = express.Router();

// Report endpoint
router.post("/report", verifyToken, report);
router.get("/getUserReports", verifyToken, getUserHistory);

export default router;
