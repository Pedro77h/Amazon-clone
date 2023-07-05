// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNNI6qEaPnFjT3DLspptVwIbjrxtIVsw0",
  authDomain: "clone-a3255.firebaseapp.com",
  projectId: "clone-a3255",
  storageBucket: "clone-a3255.appspot.com",
  messagingSenderId: "602455568000",
  appId: "1:602455568000:web:11262ac50202b6f5c68065",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
