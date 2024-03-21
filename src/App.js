import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Lauout";
import { CreateAccount } from "./components/CreateAccount";
import { LogIn } from "./components/Login";
import { Interest } from "./components/YourInterst";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
   return (
      <Provider store={store}>
      <BrowserRouter>
         <Routes>
            <Route path="/" Component={ Layout} >
<Route path="/new-user" Component={CreateAccount}  />
<Route path="/login" Component={LogIn}  />
<Route path="/interest" Component={Interest}  />
            </Route>
         </Routes>
      </BrowserRouter>
      </Provider>
   );
};

export default App;
