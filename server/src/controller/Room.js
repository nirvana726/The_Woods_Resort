import Room from "../models/Room.js";
import slugify from "slugify";
import cloudinary from "../config/cloudinary.js";

// Create Room
export const createRoom = async (req, res) => {
  try {
    const { title, description, price, maxGuest, roomSize, amenities } = req.body;

    if (!req.files || req.files.length < 3) {
      return res.status(400).json({ error: "At least 3 images are required" });
    }

    const imageUploads = req.files.map(file =>
      cloudinary.uploader.upload(file.path, { folder: "rooms" })
    );
    const results = await Promise.all(imageUploads);
    const images = results.map(result => result.secure_url);

    const room = new Room({
      title,
      slug: slugify(title, { lower: true }),
      description,
      price,
      maxGuest,
      roomSize,
      amenities: JSON.parse(amenities),
      images,
    });

    await room.save();
    res.status(201).json(room);
  } catch (error) {
    console.error("Room creation error:", error.message);
    res.status(500).json({ error: error.message });
  }
};


// Get All Rooms
export const getRooms = async (req, res) => {
  try {
    const { featured } = req.query;
    let query = {};
    
    if (featured) {
      query.featured = featured === 'true';
    }

    const rooms = await Room.find(query).sort({ createdAt: -1 });
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Single Room
export const getRoom = async (req, res) => {
  try {
    const room = await Room.findOne({ slug: req.params.slug });
    if (!room) {
      return res.status(404).json({ error: "Room not found" });
    }
    res.json(room);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Related Rooms
export const getRelatedRooms = async (req, res) => {
  try {
    const { currentRoomId } = req.params;
    const rooms = await Room.find({
      _id: { $ne: currentRoomId }
    }).limit(3);
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Room
export const updateRoom = async (req, res) => {
  try {
    const updates = req.body;
    
    if (req.files && req.files.length > 0) {
      const imageUploads = req.files.map(file => 
        cloudinary.uploader.upload(file.path, { folder: "rooms" })
      );
      const results = await Promise.all(imageUploads);
      updates.images = results.map(result => result.secure_url);
    }

    if (updates.title) {
      updates.slug = slugify(updates.title, { lower: true });
    }

    if (updates.amenities) {
      updates.amenities = JSON.parse(updates.amenities);
    }

    const room = await Room.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true }
    );

    if (!room) {
      return res.status(404).json({ error: "Room not found" });
    }
    res.json(room);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Room
export const deleteRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndDelete(req.params.id);
    if (!room) {
      return res.status(404).json({ error: "Room not found" });
    }
    res.json({ message: "Room deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Room Amenities
export const getRoomAmenities = async (req, res) => {
  try {
    const amenities = await Room.distinct("amenities");
    res.json(amenities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};