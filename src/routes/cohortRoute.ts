import express from "express";
import { body } from "express-validator";
import { protect } from "../helpers/auth";
import { createCohort, getCohort, updateCohort, deleteCohort } from "../handlers/cohort";

const cohortRouter = express.Router();

cohortRouter.post(
	"/cohorts",
	body("name").exists().isString(),
	body("examId").exists().isString(),

	protect,
	createCohort
);

cohortRouter.get("/cohorts/:id", protect, getCohort);

cohortRouter.put(
	"/cohorts/:id",
	body("name").isString(),
	protect,
	updateCohort
);

cohortRouter.delete("/cohorts/:id", protect, deleteCohort);

export default cohortRouter;
