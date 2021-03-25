import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux";
import { Step } from "./Step";
import { Counter } from "./Counter";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Step>
          {({ decrementStep, incrementStep, step }) => (
            <Counter>
              {({ value, increment, decrement }) => (
                <>
                  <div>
                    <h3>{value}</h3>
                    <button onClick={() => increment(step)}>Increment</button>
                    <button onClick={() => decrement(step)}>Decrement</button>
                  </div>
                  <div>
                    <h3>Step : {step}</h3>
                    <button onClick={incrementStep}>Increment Step</button>
                    <button onClick={decrementStep}>DecrementStep</button>
                  </div>
                </>
              )}
            </Counter>
          )}
        </Step>
      </div>
    </Provider>
  );
}

export default App;
