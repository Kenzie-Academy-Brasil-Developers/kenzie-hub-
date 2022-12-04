import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { api } from "../../Services/api";
import { Main } from "./Main";

export const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userLogged = async () => {
      const token = JSON.parse(localStorage.getItem("@TOKEN"));
      try {
        const response = await api.get("profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data);
      } catch (error) {
        //toast.error(error.response.data.message);
        console.log(error);
      } 
    };
    userLogged();
  });

  return (
    <>
      <Header />
      <Main />
    </>
  );
};
