import Activity from "../models/Activity.js";
import slugify from "slugify";
import cloudinary from "../config/cloudinary.js";

// Create Activity
export const createActivity = async (req, res) => {
  try {
    const {
      title,
      description,
      longDescription,
      category,
      groupSize,
      icon,
      featured,
    } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: "Image file is required." });
    }

    let baseSlug = slugify(title, { lower: true });
    let slug = baseSlug;

    // 🧠 Check if slug exists and make it unique
    let existing = await Activity.findOne({ slug });
    let counter = 1;
    while (existing) {
      slug = `${baseSlug}-${counter++}`;
      existing = await Activity.findOne({ slug });
    }

    const newActivity = new Activity({
      title,
      slug,
      description,
      longDescription,
      category,
      groupSize,
      icon,
      featured: featured === "true" || featured === true,
      image: `/uploads/${req.file.filename}`,
    });

    await newActivity.save();

    res.status(201).json(newActivity);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};


// Get All Activities
export const getActivities = async (req, res) => {
  try {
    const { category } = req.query;
    let query = {};
    
    if (category && category !== 'All Activities') {
      query.category = category;
    }

    const activities = await Activity.find(query).sort({ createdAt: -1 });
    res.json(activities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Single Activity
export const getActivity = async (req, res) => {
  try {
    const activity = await Activity.findOne({ slug: req.params.slug });
    if (!activity) {
      return res.status(404).json({ error: "Activity not found" });
    }
    res.json(activity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Related Activities
export const getRelatedActivities = async (req, res) => {
  try {
    const { category, currentActivityId } = req.params;
    const activities = await Activity.find({
      category,
      _id: { $ne: currentActivityId }
    }).limit(3);
    res.json(activities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Activity
export const updateActivity = async (req, res) => {
  try {
    const updates = req.body;
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "activities"
      });
      updates.image = result.secure_url;
    }

    if (updates.title) {
      updates.slug = slugify(updates.title, { lower: true });
    }

    const activity = await Activity.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true }
    );

    if (!activity) {
      return res.status(404).json({ error: "Activity not found" });
    }
    res.json(activity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Activity
export const deleteActivity = async (req, res) => {
  try {
    const activity = await Activity.findByIdAndDelete(req.params.id);
    if (!activity) {
      return res.status(404).json({ error: "Activity not found" });
    }
    res.json({ message: "Activity deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};