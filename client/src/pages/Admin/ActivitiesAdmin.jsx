// src/pages/admin/ActivitiesAdmin.jsx
import React, { useEffect, useState } from "react";
import {
  fetchActivities,
  createActivity,
  updateActivity,
  deleteActivity,
} from "../../api/adminApi";
import ActivityForm from "../../components/admin/ActivityForm";

export default function ActivitiesAdmin() {
  const [activities, setActivities] = useState([]);
  const [editingActivity, setEditingActivity] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadActivities();
  }, []);

  const loadActivities = async () => {
    setLoading(true);
    const data = await fetchActivities();
    setActivities(data);
    setLoading(false);
  };

  const handleCreateOrUpdate = async (formData, id) => {
    if (id) {
      await updateActivity(id, formData);
    } else {
      await createActivity(formData);
    }
    setEditingActivity(null);
    loadActivities();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this activity?")) {
      await deleteActivity(id);
      loadActivities();
    }
  };

  return (
    <div>
      <h1>Admin - Activities</h1>
      <ActivityForm
        key={editingActivity ? editingActivity._id : "new"}
        initialData={editingActivity}
        onSubmit={handleCreateOrUpdate}
        onCancel={() => setEditingActivity(null)}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table border="1" cellPadding="5" cellSpacing="0">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Group Size</th>
              <th>Featured</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => (
              <tr key={activity._id}>
                <td>{activity.title}</td>
                <td>{activity.category}</td>
                <td>{activity.groupSize}</td>
                <td>{activity.featured ? "Yes" : "No"}</td>
                <td>
                  <button onClick={() => setEditingActivity(activity)}>
                    Edit
                  </button>
                  <button onClick={() => handleDelete(activity._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
