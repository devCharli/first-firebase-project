import { useContext } from "react";
import { ThemeContext } from "../context/UseTheme";

export const UseTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme() must be used inside a ThemeProvider");
  }

  return context;
};
