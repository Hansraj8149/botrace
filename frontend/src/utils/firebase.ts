import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHib3rDfec1lWuM59gmhK3vclbQgdONQ0",
  authDomain: "botrace-3da3b.firebaseapp.com",
  projectId: "botrace-3da3b",
  storageBucket: "botrace-3da3b.appspot.com",
  messagingSenderId: "976300951061",
  appId: "1:976300951061:web:8833f18c11e05664d4701c",
  measurementId: "G-TYKE4ZDSKM"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);