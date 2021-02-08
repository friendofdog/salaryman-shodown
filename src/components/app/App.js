import React, { useState } from "react";

import Title from "../title/Title";
import "./App.css";

const App = () => {
  return (
    <div className="application">
      <header className="title-wrapper">
        <Title />
      </header>
    </div>
  );
}

export default App;
