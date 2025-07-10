const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";

const getAuthHeaders = () => {
  const authData = JSON.parse(localStorage.getItem("auth"));
  const token = authData?.token;
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// ---------- ROOM APIs ----------
export const fetchRooms = async () => {
  const res = await fetch(`${API_BASE}/rooms`, {
    headers: getAuthHeaders(),
  });
  return res.json();
};

export const createRoom = async (formData) => {
  const token = JSON.parse(localStorage.getItem("auth"))?.token;
  const res = await fetch(`${API_BASE}/rooms`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      // DO NOT SET Content-Type here!
    },
    body: formData,
  });

  if (!res.ok) {
    const errorData = await res.text(); // debugging
    console.error("Room creation failed:", errorData);
    throw new Error("Room creation failed");
  }

  return res.json();
};


export const updateRoom = async (id, formData) => {
  const res = await fetch(`${API_BASE}/rooms/${id}`, {
    method: "PUT",
    headers: {
      ...getAuthHeaders(),
    },
    body: formData,
  });
  return res.json();
};

export const deleteRoom = async (id) => {
  const res = await fetch(`${API_BASE}/rooms/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });
  return res.json();
};

// ---------- ACTIVITY APIs ----------
export const fetchActivities = async () => {
  const res = await fetch(`${API_BASE}/activities`, {
    headers: getAuthHeaders(),
  });
  return res.json();
};

export const createActivity = async (formData) => {
  const res = await fetch(`${API_BASE}/activities`, {
    method: "POST",
    headers: {
      ...getAuthHeaders(),
    },
    body: formData,
  });
  return res.json();
};

export const updateActivity = async (id, formData) => {
  const res = await fetch(`${API_BASE}/activities/${id}`, {
    method: "PUT",
    headers: {
      ...getAuthHeaders(),
    },
    body: formData,
  });
  return res.json();
};

export const deleteActivity = async (id) => {
  const res = await fetch(`${API_BASE}/activities/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });
  return res.json();
};
