// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC7n4dQ44um7pV4jTnugMhGOY24HBg85sY",
  authDomain: "kwik-b674e.firebaseapp.com",
  projectId: "kwik-b674e",
  storageBucket: "kwik-b674e.firebasestorage.app",
  messagingSenderId: "83224501808",
  appId: "1:83224501808:web:d262637b575f42be62d7f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)