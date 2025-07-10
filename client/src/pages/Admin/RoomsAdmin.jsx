import React, { useEffect, useState } from "react";
import {
  fetchRooms,
  createRoom,
  updateRoom,
  deleteRoom,
} from "../../api/adminApi";
import RoomForm from "../../components/admin/RoomForm";

export default function RoomsAdmin() {
  const [rooms, setRooms] = useState([]);
  const [editingRoom, setEditingRoom] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadRooms();
  }, []);

  const loadRooms = async () => {
    setLoading(true);
    const data = await fetchRooms();
    setRooms(data);
    setLoading(false);
  };

  const handleCreateOrUpdate = async (formData, id) => {
    if (id) {
      await updateRoom(id, formData);
    } else {
      await createRoom(formData);
    }
    setEditingRoom(null);
    loadRooms();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this room?")) {
      await deleteRoom(id);
      loadRooms();
    }
  };

  return (
    <div>
      <h1>Admin - Rooms</h1>
      <RoomForm
        key={editingRoom ? editingRoom._id : "new"}
        initialData={editingRoom}
        onSubmit={handleCreateOrUpdate}
        onCancel={() => setEditingRoom(null)}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table border="1" cellPadding="5" cellSpacing="0">
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Max Guests</th>
              <th>Room Size</th>
              <th>Featured</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room) => (
              <tr key={room._id}>
                <td>{room.title}</td>
                <td>{room.price}</td>
                <td>{room.maxGuest}</td>
                <td>{room.roomSize}</td>
                <td>{room.featured ? "Yes" : "No"}</td>
                <td>
                  <button onClick={() => setEditingRoom(room)}>Edit</button>
                  <button onClick={() => handleDelete(room._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
