import { Provider } from "./contexts";
import { RoutesComponent } from "./routes";

import { Global } from "./style/global";

// * A dashboard inicia tela branca e só
// depois de reload que renderiza;
// * Terminar estilização dos modais;
// * Validar modal de visualização;
// * Botões de atualizar e excluir tech;
// * Lista de tech não atualiza sozinha;
// * Quando é feito uma alteração no token,
// usuário não é redirecionado para login;
// * Criar toasts;
// * Consertar a estilização dos inputs;

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
