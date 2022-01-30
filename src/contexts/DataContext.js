import { createContext } from "react";
import { useState } from "react/cjs/react.development";

export const DataContext = createContext();
export default function DataContextProvider({ children }) {
  const [dataUser, setDataUser] = useState([]);

  return (
    <DataContext.Provider value={{ dataUser, setDataUser }}>
      {children}
    </DataContext.Provider>
  );
}
