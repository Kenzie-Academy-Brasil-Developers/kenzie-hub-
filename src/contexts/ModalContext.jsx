import { useState } from "react";
import { createContext } from "react";

export const ModalContext = createContext({});

export const ModalProvider = ({ children }) => {
  const [modalStatus, setModalStatus] = useState(false);

  return (
    <ModalContext.Provider value={{ modalStatus, setModalStatus }}>
      {children}
    </ModalContext.Provider>
  );
};

