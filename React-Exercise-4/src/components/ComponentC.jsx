import React from "react";
import ComponentD from "./ComponentD";
import { ValueConsumer } from "./ValueContext";

function ComponentC() {
  return (
    <>
      <ValueConsumer>
        {(increment) => <button onClick={increment}>Increment</button>}
      </ValueConsumer>
      <ComponentD />
    </>
  );
}

export default ComponentC;
