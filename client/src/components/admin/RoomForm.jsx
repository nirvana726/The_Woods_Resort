import React, { useState, useEffect } from "react";

const AMENITIES_OPTIONS = [
  "Free WiFi",
  "Mountain View",
  "Forest View",
  "Private Balcony",
  "Room Service",
  "TV",
  "Fireplace",
  "Safe",
  "Work Desk",
];

export default function RoomForm({ initialData = null, onSubmit, onCancel }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [maxGuest, setMaxGuest] = useState("");
  const [roomSize, setRoomSize] = useState("");
  const [featured, setFeatured] = useState(false);
  const [amenities, setAmenities] = useState([]);
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");
      setDescription(initialData.description || "");
      setPrice(initialData.price || "");
      setMaxGuest(initialData.maxGuest || "");
      setRoomSize(initialData.roomSize || "");
      setFeatured(!!initialData.featured);
      setAmenities(initialData.amenities || []);
      setImagePreviews(initialData.images || []);
      setImages([]); // New images to upload if any
    } else {
      // reset form
      setTitle("");
      setDescription("");
      setPrice("");
      setMaxGuest("");
      setRoomSize("");
      setFeatured(false);
      setAmenities([]);
      setImages([]);
      setImagePreviews([]);
    }
  }, [initialData]);

  const handleAmenityToggle = (amenity) => {
    setAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity]
    );
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);

    // Show previews
    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  setError("");

  if (!title || !description || !price || !maxGuest || !roomSize) {
    setError("Please fill all required fields.");
    return;
  }

  if (!initialData && images.length < 1) {
    setError("Please upload at least 1 image.");
    return;
  }

  if (amenities.length === 0) {
    setError("Select at least one amenity.");
    return;
  }

  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("price", price);
  formData.append("maxGuest", maxGuest);
  formData.append("roomSize", roomSize);
  formData.append("featured", featured);
  formData.append("amenities", JSON.stringify(amenities));

  images.forEach((img) => formData.append("images", img)); // ✅ THIS IS KEY

  console.log([...formData.entries()]); // ✅ DEBUG

  onSubmit(formData, initialData?._id); // Pass to parent
};


  return (
    <form onSubmit={handleSubmit} className="max-w-xl p-6 bg-white rounded shadow space-y-4">
      {error && <p className="text-red-600">{error}</p>}

      <div>
        <label className="block font-semibold mb-1">Title *</label>
        <input
          className="w-full border px-3 py-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          type="text"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Description *</label>
        <textarea
          className="w-full border px-3 py-2 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          rows={3}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold mb-1">Price (NPR) *</label>
          <input
            className="w-full border px-3 py-2 rounded"
            type="number"
            min="0"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Max Guests *</label>
          <input
            className="w-full border px-3 py-2 rounded"
            type="number"
            min="1"
            value={maxGuest}
            onChange={(e) => setMaxGuest(e.target.value)}
            required
          />
        </div>
      </div>

      <div>
        <label className="block font-semibold mb-1">Room Size *</label>
        <input
          className="w-full border px-3 py-2 rounded"
          type="text"
          placeholder="e.g. 500 sq ft"
          value={roomSize}
          onChange={(e) => setRoomSize(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Amenities *</label>
        <div className="flex flex-wrap gap-2">
          {AMENITIES_OPTIONS.map((amenity) => (
            <label key={amenity} className="inline-flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={amenities.includes(amenity)}
                onChange={() => handleAmenityToggle(amenity)}
              />
              <span>{amenity}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block font-semibold mb-1">Featured</label>
        <input
          type="checkbox"
          checked={featured}
          onChange={(e) => setFeatured(e.target.checked)}
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Images {initialData ? "(Upload to replace)" : "* (min 1)"}</label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className="border rounded px-2 py-1 w-full"
        />
        <div className="mt-2 flex gap-2 overflow-x-auto">
          {imagePreviews.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Preview ${i + 1}`}
              className="h-20 rounded object-cover"
            />
          ))}
        </div>
      </div>

      <div className="flex space-x-4">
        <button
          type="submit"
          className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded"
        >
          {initialData ? "Update Room" : "Create Room"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
