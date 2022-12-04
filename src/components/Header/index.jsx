import { useNavigate } from "react-router-dom";
import { ThemeButton } from "../../style/button";
import { StyleContent, StyleHeader } from "./style";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <StyleHeader>
      <StyleContent>
        <h2>Logo</h2>
        <ThemeButton
          buttonSize="default"
          buttonColor="grey3"
          onClick={() => {
            localStorage.removeItem("@TOKEN");
            localStorage.removeItem("@USERID")
            navigate("/");
          }}
        >
          Sair
        </ThemeButton>
      </StyleContent>
    </StyleHeader>
  );
};
