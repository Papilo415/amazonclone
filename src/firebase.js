import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: "AIzaSyC5WE070VQ7rXXgPw5YlD1fURsuWmINv8g",
  authDomain: "clone-46ee7.firebaseapp.com",
  projectId: "clone-46ee7",
  storageBucket: "clone-46ee7.appspot.com",
  messagingSenderId: "433164150530",
  appId: "1:433164150530:web:17a4f5e34337c42e20841b",
  measurementId: "G-56JMGVC1Q5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

