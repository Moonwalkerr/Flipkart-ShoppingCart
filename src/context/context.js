import { useState, createContext } from "react";
import db from "../data/db.json";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  // displayData will be shown on dashboard
  const [displayData, setDisplayData] = useState(db);
  const [cartData, setCartData] = useState([]);
  const [saved, setSavedtData] = useState([]);
  return (
    <AppContext.Provider
      value={{
        displayData: [displayData, setDisplayData],
        cartData: [cartData, setCartData],
        saved: [saved, setSavedtData],
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
