import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqv0LII_F76QO4ojqwGfGuxU2eau-O2ng",
  authDomain: "myitalian-8761c.firebaseapp.com",
  projectId: "myitalian-8761c",
  storageBucket: "myitalian-8761c.appspot.com",
  messagingSenderId: "67022693297",
  appId: "1:67022693297:web:768d5ead0a6423555a9390",
  measurementId: "G-595ZYW12G4",
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const db = getFirestore(firebase);

export { firebase, auth, db };
