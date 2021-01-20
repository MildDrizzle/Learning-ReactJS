import React, { useState } from "react";
import ComponentB from "./ComponentB";
import { ValueProvider } from "./ValueContext";

function ComponentA() {
  const [value, setValue] = useState(0);

  const hanleIncrement = () => {
    const newValue = value + 1;
    setValue(newValue);
  };

  return (
    <>
      <h1>{value}</h1>
      <ValueProvider value={hanleIncrement}>
        <ComponentB />
      </ValueProvider>
    </>
  );
}

export default ComponentA;
