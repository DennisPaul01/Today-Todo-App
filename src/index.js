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

//     const docData = {
//       stringExample: "Hello world!",
//       booleanExample: true,
//       numberExample: 3.14159265,
//       Todo: [
//         { task: "Read a book" },
//         { task: "eat" },
//         {
//           task: "Eat2",
//           date: Timestamp.fromDate(new Date()),
//         },
//       ],
//       nullExample: null,
//       objectExample: {
//         a: 5,
//         b: {
//           nested: "foo",
//         },
//       },
//     };
//     // await setDoc(doc(db, "user", "kyN49FYo3p8GUshSEIOZ"), docData);
//     const newCityRef = doc(collection(db, "cities"));
//     querySnapshot.forEach((docSnapshot) => {
//       console.log(docSnapshot.id, docSnapshot.data().Todo);
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }

// readAllUsers();
