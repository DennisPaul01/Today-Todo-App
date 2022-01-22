import { useSelector } from "react-redux";
import db from "../data/firebase";
import { collection, setDoc, doc } from "firebase/firestore";

const useTaskAdd = () => {
  const emailUser = useSelector((state) => state.auth.email);
  async function addTaskDatabase(task) {
    try {
      // asa ne conectam la o colectie
      const colRef = collection(db, "users", emailUser, "tasks");
      //Send data to the server
      await setDoc(doc(colRef), task);
    } catch (error) {
      console.error(error);
    }
  }

  return addTaskDatabase;
};

export default useTaskAdd;
