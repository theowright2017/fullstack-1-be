import express from "express";
import { body } from "express-validator";
import { protect } from "../helpers/auth";
import { createStaff, getStaff, updateStaff, deleteStaff } from "../handlers/staff";

const staffRouter = express.Router();

staffRouter.post(
    '/staff',
    body('name').exists().isString(),
    body('email').exists().isString(),
    protect,
    createStaff
)

staffRouter.get('/staff/:id', protect, getStaff)

staffRouter.put(
    '/staff/:id',
    body('name').isString(),
    body('email').isString(),
    protect,
    updateStaff
)

staffRouter.delete('/staff/:id', protect, deleteStaff)

export default staffRouter