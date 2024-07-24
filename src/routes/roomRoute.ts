import express from "express";
import { body } from "express-validator";
import { protect } from "../helpers/auth";
import { createRoom, deleteRoom, getRoom, updateRoom } from "../handlers/room";

const roomRouter = express.Router();

roomRouter.post(
    '/rooms',
    body('name').exists().isString(),
    body('capacity').exists().isNumeric(),
    protect,
    createRoom
)

roomRouter.get('/rooms/:id', protect, getRoom)

roomRouter.put(
    '/rooms/:id',
    body('name').isString(),
    body('capacity').isNumeric(),
    protect,
    updateRoom
)

roomRouter.delete('/rooms/:id', protect, deleteRoom)

export default roomRouter