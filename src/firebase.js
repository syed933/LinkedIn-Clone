import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAFIwFoERvfFaGs8Hcjr4aZSnMcW2cnVj0",
    authDomain: "linkedin-clone-52803.firebaseapp.com",
    projectId: "linkedin-clone-52803",
    storageBucket: "linkedin-clone-52803.appspot.com",
    messagingSenderId: "1086907424289",
    appId: "1:1086907424289:web:ee31b0034afa4a6b630d60"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};
