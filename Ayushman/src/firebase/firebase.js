import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage, getStream} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyASvMpY_V9HL6yz_hKag3EJI7ItL9pbXhQ",
  authDomain: "ins01:web:cb8ffb7944c05cf79b9ec8",
  measurementId: "G-V35BSJ2SKC"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, auth, firestore, storage};