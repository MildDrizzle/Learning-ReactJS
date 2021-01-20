import React from "react";

const ValueContext = React.createContext();

export const ValueProvider = ValueContext.Provider;
export const ValueConsumer = ValueContext.Consumer;
