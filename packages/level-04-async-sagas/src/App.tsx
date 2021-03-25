import React, { ReactNode } from "react";
import "./App.css";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./redux";
import { BrowserRouter } from "react-router-dom";

import { Cats } from "./Cats";
import { loginRequest } from "./redux/auth/action.creator";
import { authenticatedSelector } from "./redux/auth/reducer";

const LoginButton = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(loginRequest("<my_email>", "<my_password>"))}
    >
      Login
    </button>
  );
};

const CatsScreen = () => (
  <Cats>
    {({ cats, loading, error }) => (
      <>
        {!loading && !error && (
          <div>
            <h3>Cats</h3>
            {cats.map((cat) => (
              <p>{cat.text}</p>
            ))}
          </div>
        )}
        {loading && <h1>Loading ...</h1>}
        {error && <h1>{error}</h1>}
      </>
    )}
  </Cats>
);

const Authenticated: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const authenticated = useSelector(authenticatedSelector);

  return authenticated ? children : null;
};
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Authenticated>
            <CatsScreen />
          </Authenticated>
          <LoginButton />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
