import mongoose from "mongoose";

const activitySchema = new mongoose.Schema({
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
  longDescription: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Cultural', 'Events', 'Nature', 'Adventure']
  },
  groupSize: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create text index for search
activitySchema.index({ title: 'text', description: 'text', category: 'text' });

export default mongoose.model("Activity", activitySchema);