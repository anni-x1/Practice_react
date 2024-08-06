import React, { useContext } from 'react';
import ThemeContext from '/home/anni/Desktop/Practice_react/src/Context/ThemeContext';

function ThemeButton() {
  const theme = useContext(ThemeContext);

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      I am a {theme} themed button
    </div>
  );
}

export default ThemeButton;
