import React from "react";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="app">
        <Form />
      </div>
    </div>
  );
}

export default App;
