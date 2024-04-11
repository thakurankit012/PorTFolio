import React, { useState } from 'react';

const Mode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    //  class based on the mode
    document.body.classList.toggle('dark-mode', isDarkMode);
    document.body.classList.toggle('light-mode', !isDarkMode);
  };

  return (
    <button className="mode-toggle" onClick={toggleDarkMode}>
      {isDarkMode ? ' Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default Mode;
