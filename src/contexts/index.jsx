import { AuthProvider } from "./AuthContext";
import { ModalProvider } from "./ModalContext";

export const Provider = ({ children }) => {
  return (
    <AuthProvider>
      <ModalProvider>{children}</ModalProvider>
    </AuthProvider>
  );
};
