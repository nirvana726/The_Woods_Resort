import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import fileUpload from "express-fileupload";
import bodyParser from "body-parser";

import { connectToDb } from "./src/config/db.js";
import authRoutes from "./src/routes/User.js";
import postRoutes from "./src/routes/Post.js";
import categoryRoutes from "./src/routes/Category.js";
import bookingRoutes from "./src/routes/Booking.js";
import roomRoutes from "./src/routes/Room.js"
import activityRoutes from "./src/routes/Activity.js";
import availabilityRoutes from "./src/routes/Availability.js";

dotenv.config();

// connect to database
connectToDb();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
//app.use(fileUpload({ useTempFiles: true }));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) =>{
  res.send("Welcome")
})

// Routes
app.use("/auth/api", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/rooms", roomRoutes);
app.use("/api/activities", activityRoutes);
app.use("/api/availability", availabilityRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
