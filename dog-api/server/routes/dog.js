import express from "express";
const router = express.Router();

import { addDog, getDogs } from "../controllers/dog.js";

router.post("/", addDog);
router.get("/", getDogs);


export default router;
