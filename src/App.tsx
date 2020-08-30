import React from 'react';
import './App.css';

import { initNotification } from './services/firebaseService';

function App() {
  return (
    <div className="App">
                  <br />                  
      Hello World <br />  <br />
      Progressive Web App and Push Notifications. <br />
       
      My name is Hamza.  <br /> <br /> <br />

      <button onClick={initNotification}> Configure Notification </button>
    </div>
  );
}

export default App;
