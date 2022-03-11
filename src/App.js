import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MainPage from "./pages/MainPage";

function App() {
  const { authIsReady, user } = useAuthContext();
  console.log("app comp", user);
  return (
    <div>
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              {user && <Home />}
              {/* {!user && <Redirect to="/" />} */}
              {!user && <MainPage />}
            </Route>
            <Route exact path="/signup">
              {user && <Redirect to="/" />}
              {!user && <Signup />}
            </Route>
            <Route exact path="/login">
              {user && <Redirect to="/" />}
              {!user && <Login />}
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
