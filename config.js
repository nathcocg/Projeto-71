import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyC13J-Tn5o5Ka-gi9NEyD6PHqTEXty4hRM",
  authDomain: "projeto-71-37ab4.firebaseapp.com",
  projectId: "projeto-71-37ab4",
  storageBucket: "projeto-71-37ab4.appspot.com",
  messagingSenderId: "31508671756",
  appId: "1:31508671756:web:4d666720bc9865dd0aed29"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
