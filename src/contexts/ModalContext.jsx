import { useState } from "react";
import { createContext } from "react";

export const ModalContext = createContext({});

export const ModalProvider = ({ children }) => {
  const [modalAddStatus, setModalAddStatus] = useState(false);
  const [modaViewStatus, setModalViewStatus] = useState(false);
  const [dataTech, setDataTech] = useState({});

  return (
    <ModalContext.Provider
      value={{
        modalAddStatus,
        modaViewStatus,
        dataTech,
        setModalAddStatus,
        setModalViewStatus,
        setDataTech,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
