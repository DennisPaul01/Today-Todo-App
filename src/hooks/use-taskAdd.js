import { useSelector } from "react-redux";
import db from "../data/firebase";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";

const useTaskAdd = () => {
  const emailUser = useSelector((state) => state.auth.email);
  async function addTaskDatabase(task) {
    try {
      // asa ne conectam la o colectie
      console.log(db);
      // const snapshot = await db.collection("users").get();
      // asa ne uitam ce este in colectie
      const querySnapshot2 = await getDocs(
        collection(db, "users", emailUser, "tasks")
      );

      const colRef = collection(db, "users", emailUser, "tasks");
      //Send data to the server
      await setDoc(doc(colRef), task);
      querySnapshot2.forEach((docSnapshot) => {
        console.log(docSnapshot.id, docSnapshot.data());
      });
    } catch (error) {
      console.error(error);
    }
  }

  return addTaskDatabase;
};

export default useTaskAdd;
