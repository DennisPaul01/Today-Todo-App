import { useSelector } from "react-redux";

import db from "../data/firebase";
import { collection, setDoc, doc } from "firebase/firestore";

const useTaskAdd = () => {
  const emailUser = useSelector((state) => state.auth.email);

  async function addTaskDatabase(task) {
    try {
      const colRef = collection(db, "users", emailUser, "tasks");
      await setDoc(doc(colRef), task);
    } catch (error) {
      console.error(error);
    }
  }

  return addTaskDatabase;
};

export default useTaskAdd;
