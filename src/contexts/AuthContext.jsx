import { useEffect } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../Services/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const token = JSON.parse(localStorage.getItem("@TOKEN"));

      if (!token) {
        return;
      }

      try {
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        const dataProfile = await api.get("profile");

        setUser(dataProfile);
      } catch (error) {
        //toast.error(error.dataProfile.data.message);
        console.log(error);
      } finally {
        setLoading();
      }
    }
    loadUser();
  }, []);

  const login = async (formData) => {
    try {
      setLoading(true);
      const response = await api.post("sessions", formData);
      const { token, user: userResponse } = response.data;

      setUser(userResponse);
      localStorage.clear();
      localStorage.setItem("@TOKEN", JSON.stringify(token));
      localStorage.setItem("@USERID", JSON.stringify(userResponse.id));
      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      navigate("/dashboard");
    } catch (error) {
      //toast.error(error.response.data.message);
      console.log(error);
    } finally {
      setLoading();
    }
  };

  return (
    <AuthContext.Provider value={{ login, user }}>
      {children}
    </AuthContext.Provider>
  );
};
