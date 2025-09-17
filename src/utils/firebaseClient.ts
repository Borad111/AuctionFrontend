// firebaseClient.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCOJ-pDRmugmgsB60SJdArSkvLr1bjm_6Q",
  authDomain: "auction-75d5d.firebaseapp.com",
  projectId: "auction-75d5d",
  storageBucket: "auction-75d5d.firebasestorage.app",
  messagingSenderId: "548067064353",
  appId: "1:548067064353:web:39a5eeed4ad204b42b8160",
  measurementId: "G-YN5NN72ZZ0",
};  

// Initialize Firebase

const app = initializeApp(firebaseConfig);

// ✅ Auth safe hai SSR me
export const auth = getAuth(app);

// ✅ Analytics ko sirf client side par call karo
let analytics: ReturnType<typeof getAnalytics> | null = null;

if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { analytics };
