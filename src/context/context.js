import { useState, createContext } from "react";
import db from "../data/db.json";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  // displayData will be shown on dashboard
  const [displayData, setDisplayData] = useState(db);
  return (
    <AppContext.Provider
      value={{
        displayData: [displayData, setDisplayData],
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
