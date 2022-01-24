import { useSelector } from "react-redux";

import db from "../data/firebase";
import { doc, writeBatch } from "firebase/firestore";

const useModifyData = () => {
  const emailUser = useSelector((state) => state.auth.email);

  async function modifyDatabaseTask(modifyTask) {
    try {
      const batch = writeBatch(db);
      const sfRef = doc(db, "users", emailUser, "tasks", modifyTask);
      batch.update(sfRef, { statusTask: true });
      await batch.commit();
    } catch (error) {
      console.error(error);
    }
  }
  return modifyDatabaseTask;
};

export default useModifyData;
