import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HomeGuest from "./pages/HomeGuest";

function App() {
  const { authIsReady, user } = useAuthContext();
  return (
    // <body className="bg-white dark:bg-black transition-all">
    <>
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <section className="flex justify-center">
            <Switch>
              <Route exact path="/">
                {user && <Home />}
                {/* {!user && <Redirect to="/" />} */}
                {!user && <HomeGuest />}
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
          </section>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
