import { useContext } from "react";

import { AddModal } from "../../components/AddModal";
import { Header } from "../../components/Header";
import { ModalContext, ModalProvider } from "../../contexts/ModalContext.jsx";
import { AuthContext } from "../../contexts/AuthContext";

import { ThemeButton } from "../../style/button";
import {
  StyledList,
  StyledTechAdd,
  StyledTechs,
  StyledUserData,
} from "./style";

import iconAdd from "../../assets/add.svg";
import { ViewModal } from "../../components/ViewModal";

export const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const { data } = user;
  const {
    modalAddStatus,
    setModalAddStatus,
    modaViewStatus,
    setModalViewStatus,
    setDataTech,
  } = useContext(ModalContext);

  return (
    <>
      <Header />
      <ModalProvider>
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
              <ThemeButton
                buttonSize="default"
                buttonColor="grey3"
                onClick={() => setModalAddStatus(true)}
              >
                <img src={iconAdd} alt="+" />
              </ThemeButton>
            </StyledTechAdd>
            <StyledList>
              <ul>
                {user.data.techs.map((item) => {
                  return (
                    <li>
                      <button
                        onClick={() => setModalViewStatus(true)}
                        onChange={() => setDataTech({ item })}
                      >
                        <div>
                          <h3>{item.title}</h3>
                          <p>{item.status}</p>
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </StyledList>
          </StyledTechs>
        </main>
      </ModalProvider>
      {modalAddStatus && <AddModal />}
      {modaViewStatus && <ViewModal />}
    </>
  );
};
