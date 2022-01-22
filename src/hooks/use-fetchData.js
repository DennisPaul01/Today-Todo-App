import { useDispatch } from "react-redux";
import { databaseActions } from "../Store/task-slice";
import { useSelector } from "react-redux";
import db from "../data/firebase";
import { collection, getDocs } from "firebase/firestore";

const useFetchData = () => {
  const dispatch = useDispatch();
  const emailUser = useSelector((state) => state.auth.email);
  //   const [dataTask, setDataTask] = useState(null);

  let tasks = [];
  async function fetchDatabaseUsers() {
    try {
      //GET DATA FOR NAME

      // GET DATA FOR TAKS
      const querySnapshot1 = await getDocs(
        collection(db, "users", emailUser, "tasks")
      );

      querySnapshot1.forEach((docSnapshot) => {
        tasks.push({ id: docSnapshot.id, ...docSnapshot.data() });
        // console.log(docSnapshot.id, docSnapshot.data());
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
