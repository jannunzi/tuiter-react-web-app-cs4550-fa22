import React from "react";
import HelloReduxExampleComponent
  from "./component";
import hello from "./reducer";
import {createStore} from "redux";
import {Provider} from "react-redux";
const store = createStore(hello);

const HelloWorldReduxExample = () => {
  return(
    <Provider store={store}>
      <HelloReduxExampleComponent/>
    </Provider>
  );
};
export default HelloWorldReduxExample;
