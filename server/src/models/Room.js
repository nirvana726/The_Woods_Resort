import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  maxGuest: {
    type: Number,
    required: true,
    min: 1
  },
  roomSize: {
    type: String,
    required: true
  },
  images: {
    type: [String],
    required: true,
    validate: [arrayLimit, '{PATH} must have at least 3 images']
  },
  amenities: {
    type: [String],
    required: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  available: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

function arrayLimit(val) {
  return val.length >= 3;
}

// Create text index for search
roomSchema.index({ title: 'text', description: 'text', amenities: 'text' });

export default mongoose.model("Room", roomSchema);