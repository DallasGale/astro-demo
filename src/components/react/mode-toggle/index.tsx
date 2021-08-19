import React, { useEffect } from "react";

type Mode = boolean;

const ModeToggle: React.VFC = () => {
  const [darkMode, setDarkMode] = React.useState<Mode>(false);
  useEffect(() => {
    const body = document.body;

    if (darkMode) {
      body.classList.add("dark");
      body.classList.remove("light");
    } else {
      body.classList.add("light");
      body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="mode-toggle" onClick={() => setDarkMode(!darkMode)}>
      <span className={`mode-toggle__switch ${darkMode ? "dark" : "light"} `} />
    </div>
  );
};

export default ModeToggle;
