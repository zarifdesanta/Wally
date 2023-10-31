// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIxuSkPe-Vpnuuh6ChN2tsHX1aEnw01as",
  authDomain: "wally-f8ddf.firebaseapp.com",
  projectId: "wally-f8ddf",
  storageBucket: "wally-f8ddf.appspot.com",
  messagingSenderId: "633935530411",
  appId: "1:633935530411:web:d32763e1d6c84810f46aee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
