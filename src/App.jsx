import React, { useState, useEffect } from 'react';
import { themes } from './theme';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  };

  return (
    <div style={{ background: themes[theme].background, minHeight: "100vh" }}>
      <Navbar theme={theme} toggleTheme={handleThemeToggle} />
      <div style={{ display: 'flex' }}>
        <Sidebar theme={theme} />
        <main className="main" style={{ flex: 1, padding: "2rem", marginLeft: 240 }}>
          <Home theme={theme} />
        </main>
      </div>
    </div>
  );
}

export default App;