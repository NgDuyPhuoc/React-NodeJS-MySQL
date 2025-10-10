import express from "express";
import { getStudents, postStudents, putStudents, deleteStudents } from "../Controllers/studentsController.js"

const router = express.Router();


router.get("/", getStudents);
router.post("/", postStudents);
router.put("/:id", putStudents);
router.delete("/:id", deleteStudents);

export default router;