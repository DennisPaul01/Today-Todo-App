import { useSelector } from "react-redux";
import db from "../data/firebase";
import { deleteDoc, doc } from "firebase/firestore";

const useDeleteData = () => {
  const emailUser = useSelector((state) => state.auth.email);
  async function deleteDatabaseTask(deletedTask) {
    try {
      console.log(db);
      await deleteDoc(doc(db, "users", emailUser, "tasks", deletedTask));
      console.log("Element Sters");
    } catch (error) {
      console.error(error);
    }
  }
  return deleteDatabaseTask;
};

export default useDeleteData;
