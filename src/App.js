import React from 'react';
import ReactTooltip from "react-tooltip";

function App() {
  return (
    <div className="App">
      <h3>How to add a tooltip in React</h3>
      <p data-tip='Like, Subscribe and Share!' data-event='click'>Clue Mediator</p>
      <a
        href="https://www.cluemediator.com"
        target="_blank"
        data-tip="Click to visit Clue Mediator">www.cluemediator.com</a>
      <ReactTooltip globalEventOff="click" />
    </div>
  );
}

export default App;
