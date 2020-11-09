import React, { useRef } from "react";
import { connect, Provider } from "react-redux";
import store from "../store/store";
import Counter from "./counter";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Route exact path="/">
            {props => <Counter {...props} />}
          </Route>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
