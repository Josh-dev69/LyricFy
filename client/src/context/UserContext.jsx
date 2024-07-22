import { createContext, useState, useContext, useEffect } from "react";
import { Axios } from "../constants/index";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await Axios.get("/api/auth/user"); // Adjust the endpoint as necessary
      if (response.status === 200) {
        setUser(response.data);
      }
    } catch (error) {
      console.error("Failed to fetch user:", error);
    }
  };

  const updateUser = async (updatedData) => {
    try {
      const response = await Axios.put("/api/auth/update", updatedData); // Adjust the endpoint as necessary
      if (response.status === 200) {
        setUser(response.data);
      }
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
