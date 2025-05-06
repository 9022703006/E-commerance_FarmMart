import { createContext } from "react";
import React from "react";
import { menu_deatils } from "../Array_Data/Categ"; // Removed `catego` since it's not used

// Step-1: Create Context
export const Store_context = createContext(null);

const Store_context_provider = ({ children }) => {
  const context_values = {
    menu_deatils,
  };

  return (
    <Store_context.Provider value={context_values}>
      {children}
    </Store_context.Provider>
  );
};

export default Store_context_provider;
