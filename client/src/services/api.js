const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

// Rooms
export async function getAllRooms() {
  const res = await fetch(`${API_BASE_URL}/rooms`);
  if (!res.ok) throw new Error("Failed to fetch rooms");
  return res.json(); // expected: { rooms: [...] }
}

export async function getRoomBySlug(slug) {
  const res = await fetch(`${API_BASE_URL}/rooms/${slug}`);
  if (!res.ok) throw new Error("Failed to fetch room");
  return res.json(); // expected: single room object
}

// Activities
export async function getAllActivities() {
  const res = await fetch(`${API_BASE_URL}/activities`);
  if (!res.ok) throw new Error("Failed to fetch activities");
  return res.json(); // expected: { activities: [...] }
}

export async function getActivityBySlug(slug) {
  const res = await fetch(`${API_BASE_URL}/activities/${slug}`);
  if (!res.ok) throw new Error("Failed to fetch activity");
  return res.json(); // expected: single activity object
}
