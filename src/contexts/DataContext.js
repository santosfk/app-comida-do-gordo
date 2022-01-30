import React, { createContext, useState, useEffect } from "react";
import users from "../data/users";
export const DataContext = createContext();
export default function DataContextProvider({ children }) {
  const [dataUser, setDataUser] = useState(users);
  useEffect(() => {
    console.log(dataUser);
  }, [dataUser]);
  return (
    <DataContext.Provider value={{ dataUser, setDataUser }}>
      {children}
    </DataContext.Provider>
  );
}
