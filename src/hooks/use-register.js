import { useDispatch } from "react-redux";
import { authActions } from "../Store/userAuth-slice";
import { useHistory } from "react-router-dom";
import db from "../data/firebase";
import { doc, setDoc } from "firebase/firestore";
const useRegister = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  async function register(userName, enterEmail, enterPassowrd) {
    try {
      const request = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAwl0ONcwp9pJ5gPFBPSwysmgBXBcmTtwI",
        {
          method: "POST",
          body: JSON.stringify({
            email: enterEmail,
            password: enterPassowrd,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "aplication/json",
          },
        }
      );

      if (request.status === 200) {
        await setDoc(doc(db, "personalData", enterEmail), {
          name: userName,
          email: enterEmail,
        });

        const resp = await request.json();
        dispatch(
          authActions.login({
            token: resp.idToken,
            isLoggedIn: true,
            statusLogin: "SUCCES",
          })
        );
        history.push("/ap");
      }

      if (request.status >= 400) {
        const resp = await request.json();

        dispatch(
          authActions.login({
            token: null,
            isLoggedIn: false,
            statusLogin: resp.error.message,
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  return register;
};

export default useRegister;
