import { useDispatch, useSelector } from "react-redux";
import { databaseActions } from "../Store/task-slice";

import db from "../data/firebase";
import { collection, getDocs } from "firebase/firestore";

const useFetchData = () => {
  const emailUser = useSelector((state) => state.auth.email);

  const dispatch = useDispatch();

  let tasks = [];
  async function fetchDatabaseUsers() {
    try {
      const querySnapshot1 = await getDocs(
        collection(db, "users", emailUser, "tasks")
      );
      querySnapshot1.forEach((docSnapshot) => {
        tasks.push({ id: docSnapshot.id, ...docSnapshot.data() });
      });
      dispatch(
        databaseActions.addTaskInRedux({
          tasks: tasks,
        })
      );
    } catch (error) {
      // console.error(error);
    }
  }

  return fetchDatabaseUsers;
};

export default useFetchData;
