import { AuthProvider } from "./contexts/AuthContext";
import { RoutesComponent } from "./routes";

import { Global } from "./style/global";

// * quando é feito uma alteração no token, 
// usuário não é redirecionado para login;
// * A dashboard inicia tela branca e só
// depois de reload que renderiza;
// * criar toasts;
// * consertar a estilização dos inputs;
// * bug no redirecionamento das páginas;

export const App = () => {
  return (
    <div className="App">
      <Global />
      <AuthProvider>
        <RoutesComponent />
      </AuthProvider>
    </div>
  );
};
