import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: "telegraph-tutoring.appspot.com",
  messagingSenderId: "189709525863",
  appId: "1:189709525863:web:09b2b993718903291bc5c2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);