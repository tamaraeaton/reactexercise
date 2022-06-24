import React, { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/NavBar";
import ContentBox from "./components/ContentBox";

function App() {
  const [isDarkTheme, setDarkTheme] = useState(false);

  return (
    <div>
      <Header isDarkTheme={isDarkTheme} />
      <Navbar isDarkTheme={isDarkTheme} setTheme={setDarkTheme} />
      {/* <ContentBox isDarkTheme={isDarkTheme} /> */}
    </div>
  );
}

export default App;
