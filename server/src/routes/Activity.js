import express from "express";
import {
  createActivity,
  getActivities,
  getActivity,
  getRelatedActivities,
  updateActivity,
  deleteActivity
} from "../controller/Activity.js";
import { requireSignIn, isAdmin } from "../middlewares/Auth.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

router.post(
  "/",
  requireSignIn,
  isAdmin,
  upload.single("image"),
  createActivity
);
router.get("/", getActivities);
router.get("/:slug", getActivity);
router.get("/related/:category/:currentActivityId", getRelatedActivities);
router.put(
  "/:id",
  requireSignIn,
  isAdmin,
  upload.single("image"),
  updateActivity
);
router.delete("/:id", requireSignIn, isAdmin, deleteActivity);

export default router;