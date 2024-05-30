import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2KkI6_UxRHrNn-tsnpVeLT_gT5tcF2FU",
  authDomain: "qrlingz.firebaseapp.com",
  projectId: "qrlingz",
  storageBucket: "qrlingz.appspot.com",
  messagingSenderId: "1054371633362",
  appId: "1:1054371633362:web:e304b854c89a1ce91bb50b",
  measurementId: "G-2JQFFFVRNC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);

export { auth, db };

