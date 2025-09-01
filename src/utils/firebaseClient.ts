// firebaseClient.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOJ-pDRmugmgsB60SJdArSkvLr1bjm_6Q",
  authDomain: "auction-75d5d.firebaseapp.com",
  projectId: "auction-75d5d",
  storageBucket: "auction-75d5d.firebasestorage.app",
  messagingSenderId: "548067064353",
  appId: "1:548067064353:web:39a5eeed4ad204b42b8160",
  measurementId: "G-YN5NN72ZZ0"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
