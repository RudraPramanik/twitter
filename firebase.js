import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCrY7EX0MSvqjt53OWBu7s_BAJo3hNY4y0',
  authDomain: 'twitter-d547f.firebaseapp.com',
  projectId: 'twitter-d547f',
  storageBucket: 'twitter-d547f.appspot.com',
  messagingSenderId: '772879385350',
  appId: '1:772879385350:web:6f6725b90e24e223b31487',
  measurementId: 'G-6FXJ1CJZP7',
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };

// Import the functions you need from the SDKs you need
