import { useSelector } from "react-redux";
import db from "../data/firebase";
import { doc, writeBatch } from "firebase/firestore";

const useModifyData = () => {
  const emailUser = useSelector((state) => state.auth.email);
  async function modifyDatabaseTask(modifyTask) {
    try {
      console.log(db);
      const batch = writeBatch(db);
      const sfRef = doc(db, "users", emailUser, "tasks", modifyTask);
      batch.update(sfRef, { statusTask: true });
      await batch.commit();
      console.log("Update Done");
    } catch (error) {
      console.error(error);
    }
  }
  return modifyDatabaseTask;
};

export default useModifyData;
