importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');
 importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js')

const firebaseConfig = {
    apiKey: "AIzaSyCtw0VBeAGCi9Png2b9o2qztd-0geGrxDE",
    authDomain: "fir-project-4db1f.firebaseapp.com",
    databaseURL: "https://fir-project-4db1f.firebaseio.com",
    projectId: "fir-project-4db1f",
    storageBucket: "fir-project-4db1f.appspot.com",
    messagingSenderId: "122224133326",
    appId: "1:122224133326:web:b09c809e0d4ea142f4fc9f",
    measurementId: "G-HW4SNZW7Q0"
  };

  firebaseConfig.initializeApp(firebaseConfig)

  firebase.messaging();