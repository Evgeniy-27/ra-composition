import React from "react";
import "./App.css";

import Cards from "./task1/Cards.jsx";
import Decomposition from "./task2/Decomposition.jsx";

function App() {
  return (
    <React.Fragment>
      <div className="task-1">
        <Cards />
      </div>
      <div className="task-2">
     <Decomposition />
      </div>
    </React.Fragment>
  );
}

export default App;
