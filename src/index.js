import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { myNewTheme } from "./theme";
import { Provider } from "react-redux";
import store from "./Store/index";
// import db from "./data/firebase";
// import {
//   collection,
//   query,
//   where,
//   getDocs,
//   setDoc,
//   doc,
//   Timestamp,
//   addDoc,
//   getDoc,
// } from "firebase/firestore";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ChakraProvider resetCSS theme={myNewTheme}>
          <App />
        </ChakraProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// async function readAllUsers() {
//   try {
//     // asa ne conectam la o colectie
//     console.log(db);
//     // const snapshot = await db.collection("users").get();
//     // asa ne uitam ce este in colectie
//     const querySnapshot = await getDocs(collection(db, "users"));
//     const querySnapshot2 = await getDocs(
//       collection(db, "users", "6vrhSf3MKPp8DyCqE8Zw", "tasks")
//     );
//     const docData = {
//       taskTodo: "write a letter",
//       date: "26.06.2021",
//       state: false,
//     };
//     // await setDoc(doc(db, "users", "kyN49FYo3p8GUshSEIOZ"), docData);

//     const colRef = collection(db, "users", "6vrhSf3MKPp8DyCqE8Zw", "tasks");

//     await setDoc(doc(colRef), docData);
//     querySnapshot2.forEach((docSnapshot) => {
//       console.log(docSnapshot.id, docSnapshot.data());
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }

// readAllUsers();

// async function readlDataPersona() {
//   try {
//     const docRef = doc(db, "personalData", "dn@y.com");
//     const docSnap = await getDoc(docRef);

//     if (docSnap.exists()) {
//       console.log("Document data:", docSnap.data());
//     } else {
//       // doc.data() will be undefined in this case
//       console.log("No such document!");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }
// readlDataPersona();
