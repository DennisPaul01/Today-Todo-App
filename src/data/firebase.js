//Brings in the core functionality
import * as firebase from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { apiKeyFirebase } from "./apiKey";
// This bring in the firestoare functionality

import "firebase/auth";
import "firebase/firestore";

//TODO: asta nu are trebuie sa fie aici

const firebaseConfig = {
  apiKey: apiKeyFirebase,
  authDomain: "database-today.firebaseapp.com",
  projectId: "database-today",
  storageBucket: "database-today.appspot.com",
  messagingSenderId: "357262103531",
  appId: "1:357262103531:web:98ae1bc792b5b96410bfae",
};

// Debbuging daca am uitat sa adaugam confing
if (!firebaseConfig.apiKey) throw new Error("Missing fire config: apiKey");
if (!firebaseConfig.authDomain)
  throw new Error("Missing fire config: authDomain");
if (!firebaseConfig.projectId)
  throw new Error("Missing fire config: projectId");
if (!firebaseConfig.storageBucket)
  throw new Error("Missing fire config: storageBucket");
if (!firebaseConfig.messagingSenderId)
  throw new Error("Missing fire config: messagingSenderId");
if (!firebaseConfig.appId) throw new Error("Missing fire config: appId");

// asta conecteaza la baza noastra de date (la proiectul nostru)
firebase.initializeApp(firebaseConfig);

//asta creaza databasul in sine
const db = getFirestore();

export default db;
