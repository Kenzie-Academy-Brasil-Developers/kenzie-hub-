import { Link } from "react-router-dom";
import { ThemeButton } from "../../style/button";
import { StyleContent, StyleHeader } from "./style";

export const Header = () => {
  return (
    <StyleHeader>
      <StyleContent>
        <h2>Logo</h2>
        <ThemeButton buttonSize="default" buttonColor="grey3">
            <Link>Sair</Link>
        </ThemeButton>
      </StyleContent>
    </StyleHeader>
  );
};
