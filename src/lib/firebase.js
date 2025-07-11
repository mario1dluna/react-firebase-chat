import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-f2e02.firebaseapp.com",
  projectId: "reactchat-f2e02",
  storageBucket: "reactchat-f2e02.firebasestorage.app",
  messagingSenderId: "884751373962",
  appId: "1:884751373962:web:25f05644ebf057144d3f73",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
