import { useState } from "react";
import { createContext } from "react";

export const ModalContext = createContext({});

export const ModalProvider = ({ children }) => {
  const [modalAddStatus, setModalAddStatus] = useState(false);

  return (
    <ModalContext.Provider value={{ modalAddStatus, setModalAddStatus }}>
      {children}
    </ModalContext.Provider>
  );
};

