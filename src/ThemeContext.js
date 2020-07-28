import { createContext } from "react";

// Giving a hook to createContext
const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;
