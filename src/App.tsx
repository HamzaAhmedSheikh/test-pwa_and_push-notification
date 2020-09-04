import React from 'react';
import './App.css';



import { initNotification } from './FCM'



function App() {

  

    return (
    <div className="App">
                      
                                
      Hello World <br />  <br /> <br />
      Progressive Web App and Push Notifications. <br />
      Firebase Cloud Messaging. <br />
       
      My name is Hamza.  <br /> <br /> <br />

          
     
      <button onClick={initNotification}> suscribe to notification  </button> 
    </div>
  );
}

export default App;
