import { RoutesComponent } from "./routes";
import { Global } from "./style/global";

// Renderizar dados do user na dashboard;
// bug no redirecionamento das páginas;
// não estou conseguindo usar img;
// conseguir consertar a estilização dos inputs;
// estilizar a main
// criar toasts;

export const App = () => {
  return (
    <div className="App">
      <Global />
      <RoutesComponent />
    </div>
  );
};
