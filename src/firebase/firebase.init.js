// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFA-FUVlpxvQ0r_Cueo6zxggQe0_3qng0",
  authDomain: "smart-hr-site.firebaseapp.com",
  projectId: "smart-hr-site",
  storageBucket: "smart-hr-site.appspot.com",
  messagingSenderId: "241210143260",
  appId: "1:241210143260:web:81588933abdb9f0a8065d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;