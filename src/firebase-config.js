// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBcFTRi3lCZwVRaTPrr8SWv5TrF5TLMjnM',
  authDomain: 'where-s-waldo-6c026.firebaseapp.com',
  projectId: 'where-s-waldo-6c026',
  storageBucket: 'where-s-waldo-6c026.appspot.com',
  messagingSenderId: '23909938766',
  appId: '1:23909938766:web:3c8673b0e4b67fa177751f',
  measurementId: 'G-KQ0WKZWSSH',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
