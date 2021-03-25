import React, { ReactElement } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux";
import { State } from "./redux/cats/reducer";
import { Cats } from "./Cats";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
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
      </div>
    </Provider>
  );
}

export default App;
