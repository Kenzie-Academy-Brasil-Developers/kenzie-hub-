import { AddModal } from "../../components/AddModal";
import { Header } from "../../components/Header";
import { ModalContext, ModalProvider } from "../../contexts/ModalContext.jsx";
import { Main } from "./Main";
import { useContext, useEffect } from "react";

export const Dashboard = () => {
  const { modalStatus } = useContext(ModalContext);

  useEffect(() => {
    console.log(modalStatus);
  }, [modalStatus]);

  return (
    <>
      {modalStatus && <AddModal />}
      <Header />
      <ModalProvider>
        <Main />
      </ModalProvider>
    </>
  );
};
