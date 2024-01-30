import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBhjB2tyIKMtyTdAAH6eDqKrQTS8LBneNw",
  authDomain: "ecommerce49995.firebaseapp.com",
  projectId: "ecommerce49995",
  storageBucket: "ecommerce49995.appspot.com",
  messagingSenderId: "347393943019",
  appId: "1:347393943019:web:4e04ca81baef5dfaf9e5ae"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)