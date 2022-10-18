import React from "react";
import ReduxExamples from "./redux-examples";
import LocalText from "./local-state/local-text";
import LocalBooleans from "./local-state/local-booleans";

const Assignment7 = () => {
  return(
    <>
      <h1>Assignment 7</h1>
      <LocalBooleans/>
      <LocalText/>
      <ReduxExamples/>
    </>
  );
};
export default Assignment7;