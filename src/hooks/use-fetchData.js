import { useDispatch } from "react-redux";
import { databaseActions } from "../Store/task-slice";

import db from "../data/firebase";
import { collection, getDocs } from "firebase/firestore";

const useFetchData = () => {
  const dispatch = useDispatch();

  //   const [dataTask, setDataTask] = useState(null);
  let tasks = [];
  async function fetchDatabaseUsers(emailUser) {
    try {
      console.log(db);
      const querySnapshot2 = await getDocs(
        collection(db, "users", emailUser, "tasks")
      );
      querySnapshot2.forEach((docSnapshot) => {
        tasks.push({ id: docSnapshot.id, ...docSnapshot.data() });
        // console.log(docSnapshot.id, docSnapshot.data());
      });
      dispatch(
        databaseActions.addTaskInRedux({
          tasks: tasks,
        })
      );
      console.log(tasks);
    } catch (error) {
      console.error(error);
    }
  }

  return fetchDatabaseUsers;
};

export default useFetchData;
