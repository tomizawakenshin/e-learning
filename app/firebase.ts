import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC8P8cWFSSTQkqGP1dbcQEe4HHGo63Pk1I",
    authDomain: "e-learning-9a4e5.firebaseapp.com",
    projectId: "e-learning-9a4e5",
    storageBucket: "e-learning-9a4e5.appspot.com",
    messagingSenderId: "451852176737",
    appId: "1:451852176737:web:ea2f4710d4fd6d5f6a0920",
    measurementId: "G-NGCTJJRN89"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);   //データベース操作のためにFirestoreモジュール取得

export { auth, provider, db };