import { useDispatch } from "react-redux";
import { personalDataActions } from "../Store/personalData-slice";

import { useSelector } from "react-redux";

import db from "../data/firebase";
import { doc, getDoc } from "firebase/firestore";

const useFetchName = () => {
  const dispatch = useDispatch();
  const emailUser = useSelector((state) => state.auth.email);

  let userName = "user";
  async function fetchDatabaseUsersName() {
    try {
      //GET DATA FOR NAME
      const docRef = doc(db, "personalData", emailUser);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        userName = docSnap.data().name;
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }

      dispatch(
        personalDataActions.addNameInRedux({
          userName: userName,
        })
      );
    } catch (error) {
      // console.error(error);
    }
  }

  return fetchDatabaseUsersName;
};

export default useFetchName;
