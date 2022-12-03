import { RoutesComponent } from "./routes";
import { Global } from "./style/global";


export const App = () => {
  return (
    <div className="App">
      <Global />
      <RoutesComponent />
    </div>
  );
};
