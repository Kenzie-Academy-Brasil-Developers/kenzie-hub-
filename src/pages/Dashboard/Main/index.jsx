import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { ThemeButton } from "../../../style/button";
import {
  StyledList,
  StyledTechAdd,
  StyledTechs,
  StyledUserData,
} from "./style";
import add from "../../../assets/add.svg";
import { AddModal } from "../../../components/AddModal";
export const Main = () => {
  const { user } = useContext(AuthContext);
  const { data } = user;
  console.log(user);
  return (
    <main>
      <StyledUserData>
        <div>
          <h1>Olá, {data.name}</h1>
          <p>{data.course_module} (Introdução ao Frontend)</p>
        </div>
      </StyledUserData>
      <StyledTechs>
        <StyledTechAdd>
          <h4>Tecnologias</h4>
          <ThemeButton buttonSize="default" buttonColor="grey3">
            <img src={add} alt="+" />
          </ThemeButton>
        </StyledTechAdd>
        <StyledList>
          <ul>
            {data.techs.map((item) => {
              return (
                <li>
                  <h3>name</h3>
                  <div>
                    <p>nível</p>
                    <button>lixo</button>
                  </div>
                </li>
              );
            })}
          </ul>
        </StyledList>
      </StyledTechs>
    </main>
  );
};
