import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function VirtualDOMExample() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
      updateRealDOM();
    }, 1000);
  }, []);



  // Function to update the Real DOM
  const updateRealDOM = () => {
    const realDOMContainer = document.getElementById('real-dom-container');
    realDOMContainer.innerHTML = `
      <div>
        <div>Real DOM</div>
        <div>
          <input type="text" />
        </div>
        <div>${new Date().toLocaleTimeString()}</div>
      </div>
    `;
  };

  return (
    <div>
      <div>Virtual DOM</div>
      <div>
        <input type="text" />
      </div>
      <div>{currentTime}</div>
      <br/>
      <div id="real-dom-container"></div>
    </div>
  );
}

export default VirtualDOMExample;
