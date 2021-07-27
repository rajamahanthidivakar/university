import React from "react";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <div>
      <div>
        {/* Nav bar will start here to show the headings*/}
        <Navbar />
      </div>
      <div className="app">
        {/* form component to fill the user details */}
        <Form />
      </div>
    </div>
  );
}

export default App;
