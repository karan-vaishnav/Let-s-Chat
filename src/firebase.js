// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByBbrGOU4ImJnG9L6rXd_IsHerYAwt0s8",
  authDomain: "let-s-chat-9a814.firebaseapp.com",
  projectId: "let-s-chat-9a814",
  storageBucket: "let-s-chat-9a814.appspot.com",
  messagingSenderId: "925297835276",
  appId: "1:925297835276:web:3f8dd96625afde16d75d29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
export const db = getFirestore(app)