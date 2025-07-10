// routes/Availability.js
import express from "express";
import {
  checkRoomAvailability,
  checkActivityAvailability
} from "../controller/Availability.js";

const router = express.Router();

router.get("/room", checkRoomAvailability);
router.get("/activity", checkActivityAvailability);

export default router;