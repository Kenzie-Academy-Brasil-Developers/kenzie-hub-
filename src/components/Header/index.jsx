import { useNavigate } from "react-router-dom";

import { ThemeButton } from "../../style/button";
import { StyleContent, StyleHeader } from "./style";
import logo from "../../assets/logo.svg";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <StyleHeader>
      <StyleContent>
        <img src={logo} alt="Logo" />
        <ThemeButton
          buttonSize="default"
          buttonColor="grey3"
          onClick={() => {
            localStorage.removeItem("@TOKEN");
            localStorage.removeItem("@USERID");
            navigate("/");
          }}
        >
          Sair
        </ThemeButton>
      </StyleContent>
    </StyleHeader>
  );
};
