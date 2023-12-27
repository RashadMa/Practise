import React, { useState } from 'react';
import { useThemeContext } from '../context/ThemeContext';

const ThemeComponent = () => {
      const { theme, toggleTheme } = useThemeContext();
      return (
            <div style={{ background: theme === "light" ? "#fff" : "#000", color: theme === "light" ? "#000" : "#fff" }}>
                  <p>{theme}</p>
                  <button onClick={toggleTheme}>Toggle Theme</button>
            </div>
      );
};

export default ThemeComponent;
