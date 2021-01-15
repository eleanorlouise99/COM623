import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDsIajM_YKRtgOBbZx7k-gl_bmPjGdjWrQ",
    authDomain: "solent-sport.firebaseapp.com",
    projectId: "solent-sport",
    storageBucket: "solent-sport.appspot.com",
    messagingSenderId: "729984299635",
    appId: "1:729984299635:web:f8dbf26fc6d9d600e87006"
  };
 
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;