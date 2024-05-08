
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-travel-tourism.firebaseapp.com",
  projectId: "mern-travel-tourism",
  storageBucket: "mern-travel-tourism.appspot.com",
  messagingSenderId: "304378877141",
  appId: "1:304378877141:web:3bddab2778ca23186f7e5c",
};


export const app = initializeApp(firebaseConfig);
