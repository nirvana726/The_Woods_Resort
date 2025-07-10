import { createContext, useContext, useState, useEffect } from "react";
import { getAllActivities, getActivityBySlug } from "../services/api";

const ActivityContext = createContext();

export const ActivityProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchActivities = async () => {
    try {
      const data = await getAllActivities();
      setActivities(data.activities || []);
    } catch (error) {
      console.error("Failed to fetch activities:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  return (
    <ActivityContext.Provider value={{ activities, loading, fetchActivities, getActivityBySlug }}>
      {children}
    </ActivityContext.Provider>
  );
};

export const useActivity = () => useContext(ActivityContext);
