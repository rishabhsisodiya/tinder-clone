import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAzRCNnIK3WjuH_g2lB5DwCMyhS0dSLPFY",
    authDomain: "tinder-clone-f0430.firebaseapp.com",
    databaseURL: "https://tinder-clone-f0430.firebaseio.com",
    projectId: "tinder-clone-f0430",
    storageBucket: "tinder-clone-f0430.appspot.com",
    messagingSenderId: "79548970856",
    appId: "1:79548970856:web:c2c5e11856ded5369648dd",
    measurementId: "G-M8BFMDTGBS"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;