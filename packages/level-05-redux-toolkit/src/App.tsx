import React from "react";
import "./App.css";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./redux";
import { BrowserRouter } from "react-router-dom";

import { Cats } from "./Cats";
import Auth, { authenticatedSelector } from "./redux/auth/slice";

const LogoutButton = () => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(Auth.logout())}>Logout</button>;
};

const LoginErrorButton = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(Auth.loginFailed({ error: "Oh no it failed" }))}
    >
      Auth Failed
    </button>
  );
};

const LoginButton = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() =>
        dispatch(
          Auth.loginRequest({
            user: "<my_email>",
            password: "<my_password>",
          })
        )
      }
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
              <p key={cat?._id}>{cat?.text}</p>
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
          <LogoutButton />
          <LoginErrorButton />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
