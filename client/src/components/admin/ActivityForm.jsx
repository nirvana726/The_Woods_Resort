import React, { useState, useEffect } from "react";

const categories = ["Cultural", "Events", "Nature", "Adventure"];

export default function ActivityForm({ initialData = null, onSubmit, onCancel }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [groupSize, setGroupSize] = useState("");
  const [icon, setIcon] = useState("");
  const [featured, setFeatured] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");
      setDescription(initialData.description || "");
      setLongDescription(initialData.longDescription || "");
      setCategory(initialData.category || categories[0]);
      setGroupSize(initialData.groupSize || "");
      setIcon(initialData.icon || "");
      setFeatured(!!initialData.featured);
      setImagePreview(initialData.image || null); // assume image URL string
      setImageFile(null);
    } else {
      // Reset
      setTitle("");
      setDescription("");
      setLongDescription("");
      setCategory(categories[0]);
      setGroupSize("");
      setIcon("");
      setFeatured(false);
      setImageFile(null);
      setImagePreview(null);
      setError("");
    }
  }, [initialData]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview(initialData?.image || null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!title || !description || !longDescription || !groupSize || !icon) {
      setError("Please fill all required fields.");
      return;
    }
    if (!initialData && !imageFile) {
      setError("Image is required for new activity.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("longDescription", longDescription);
    formData.append("category", category);
    formData.append("groupSize", groupSize);
    formData.append("icon", icon);
    formData.append("featured", featured);

    if (imageFile) {
      formData.append("image", imageFile);
    }

    onSubmit(formData, initialData?._id);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl p-6 bg-white rounded-lg shadow-md space-y-6"
    >
      <h3 className="text-2xl font-semibold text-gray-800">
        {initialData ? "Edit Activity" : "Add New Activity"}
      </h3>

      {error && <p className="text-red-600 font-semibold">{error}</p>}

      <div>
        <label className="block font-medium mb-1" htmlFor="title">
          Title *
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          required
        />
      </div>

      <div>
        <label className="block font-medium mb-1" htmlFor="description">
          Description *
        </label>
        <textarea
          id="description"
          rows={2}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
          required
        />
      </div>

      <div>
        <label className="block font-medium mb-1" htmlFor="longDescription">
          Long Description *
        </label>
        <textarea
          id="longDescription"
          rows={4}
          value={longDescription}
          onChange={(e) => setLongDescription(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
          required
        />
      </div>

      <div>
        <label className="block font-medium mb-1" htmlFor="category">
          Category *
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          required
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-medium mb-1" htmlFor="groupSize">
          Group Size *
        </label>
        <input
          id="groupSize"
          type="number"
          min="1"
          value={groupSize}
          onChange={(e) => setGroupSize(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          required
        />
      </div>

      <div>
        <label className="block font-medium mb-1" htmlFor="icon">
          Icon *
        </label>
        <input
          id="icon"
          type="text"
          value={icon}
          onChange={(e) => setIcon(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          placeholder="Enter icon name or URL"
          required
        />
      </div>

      <div className="flex items-center space-x-3">
        <label className="block font-medium">Featured</label>
        <input
          type="checkbox"
          checked={featured}
          onChange={() => setFeatured(!featured)}
          className="h-5 w-5 text-teal-600 rounded"
        />
      </div>

      <div>
        <label className="block font-medium mb-1" htmlFor="imageFile">
          Image {initialData ? "(select to replace)" : "*"}
        </label>
        <input
          id="imageFile"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full"
          required={!initialData}
        />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="mt-3 h-40 w-auto object-cover rounded shadow"
          />
        )}
      </div>

      <div className="flex space-x-4">
        <button
          type="submit"
          className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded font-semibold transition"
        >
          {initialData ? "Update Activity" : "Add Activity"}
        </button>

        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-300 hover:bg-gray-400 px-6 py-2 rounded transition"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
