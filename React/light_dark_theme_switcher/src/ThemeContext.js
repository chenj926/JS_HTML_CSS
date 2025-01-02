import React from "react";

const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = React.useState("light");

    return (
        <ThemeContext.Provider 
            value={{
                theme, 
                toggleTheme: () => setTheme(theme === "light" ? "dark" : "light")
            }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    return React.useContext(ThemeContext);
};

