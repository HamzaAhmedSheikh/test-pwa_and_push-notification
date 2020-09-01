import React from 'react';
import './App.css';

// import { GetToken } from './services/firebaseService';

import firebase from './services/firebaseService'

function App() {

  const messaging = firebase.messaging()

  messaging.requestPermission().then(() => {

    return messaging.getToken()

  }).then((token) => {

    console.log('token ==> ', token);    

  })

  



  return (
    <div className="App">
                  <br />                  
      Hello World <br />  <br />
      Progressive Web App and Push Notifications. <br />
       
      My name is Hamza.  <br /> <br /> <br />

      {/* <button onClick={GetToken}> Configure Notification </button> */}
    </div>
  );
}

export default App;
