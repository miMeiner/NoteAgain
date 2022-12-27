import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyB0vi3VHoUqfVd0b1Snwhrt0PA0htcCRoM',

  authDomain: 'noteagain-63f51.firebaseapp.com',

  projectId: 'noteagain-63f51',

  storageBucket: 'noteagain-63f51.appspot.com',

  messagingSenderId: '838706413547',

  appId: '1:838706413547:web:6063bc8be57921bcd463ae',
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
