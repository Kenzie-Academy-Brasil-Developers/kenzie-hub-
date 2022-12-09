import { Provider } from "./contexts";
import { RoutesComponent } from "./routes";

import { Global } from "./style/global";

// * abrir modal:
// renderizar na tela /ok/
// validar form, yup,
// fazer envio do form, axios;
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
      <Provider>
        <RoutesComponent />
      </Provider>
    </div>
  );
};
