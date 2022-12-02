import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Global } from "./style/global";

export const App = () => {

  return (
    <div className="App">
      <Global />
      <Login />
      <Register />
    </div>
  );
};
