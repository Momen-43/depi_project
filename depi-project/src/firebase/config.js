import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf2kvOfkA9S1T9DCTaZkdI1BCq6Iq8TQE",
  authDomain: "depi-project-1f1b1.firebaseapp.com",
  projectId: "depi-project-1f1b1",
  storageBucket: "depi-project-1f1b1.firebasestorage.app",
  messagingSenderId: "408704467932",
  appId: "1:408704467932:web:a59b5ccf05d98a0af40519"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;