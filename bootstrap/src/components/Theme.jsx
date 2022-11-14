import { createContext, useState } from "react";
export const Themecontext = createContext();

export const ThemeComponent = ({ children }) => {
  const [check, setChecked] = useState(true);
  const themeChecker = () => {
    setChecked(!check);
  };

  return (
    <Themecontext.Provider value={{ check, themeChecker }}>
      {children}
    </Themecontext.Provider>
  );
};
