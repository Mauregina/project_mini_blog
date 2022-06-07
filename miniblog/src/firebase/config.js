import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAusM2jSsdLMtViloASudeCaC6Vvh-rNfo",
  authDomain: "miniblog-5fe54.firebaseapp.com",
  projectId: "miniblog-5fe54",
  storageBucket: "miniblog-5fe54.appspot.com",
  messagingSenderId: "801575582686",
  appId: "1:801575582686:web:fb6aea5e4520006e6cfb4f"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };