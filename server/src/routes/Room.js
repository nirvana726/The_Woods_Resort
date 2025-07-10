import express from "express";
import {
  createRoom,
  getRooms,
  getRoom,
  getRelatedRooms,
  updateRoom,
  deleteRoom,
  getRoomAmenities
} from "../controller/Room.js";
import { requireSignIn, isAdmin } from "../middlewares/Auth.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

router.post(
  "/",
  requireSignIn,
  isAdmin,
  upload.array("images", 5),
  createRoom
);
router.get("/", getRooms);
router.get("/:slug", getRoom);
router.get("/related/:currentRoomId", getRelatedRooms);
router.get("/amenities/list", getRoomAmenities);
router.put(
  "/:id",
  requireSignIn,
  isAdmin,
  upload.array("images", 5),
  updateRoom
);
router.delete("/:id", requireSignIn, isAdmin, deleteRoom);

export default router;