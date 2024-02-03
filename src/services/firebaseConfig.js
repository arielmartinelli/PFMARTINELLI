import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCHfCFbgWwCBMbDSqTq6UnpS-BwBtT22Zc",
  authDomain: "pfmartinelli-da364.firebaseapp.com",
  projectId: "pfmartinelli-da364",
  storageBucket: "pfmartinelli-da364.appspot.com",
  messagingSenderId: "509459046596",
  appId: "1:509459046596:web:910707ee7a13230ad6a991"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)