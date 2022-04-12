// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHGOq3A7zFvoXFN6UfXZ-o8WoP2dzxLCE",
  authDomain: "tec-geeks-auth.firebaseapp.com",
  projectId: "tec-geeks-auth",
  storageBucket: "tec-geeks-auth.appspot.com",
  messagingSenderId: "728477841663",
  appId: "1:728477841663:web:c9bbf86bd8b341555c34ca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
