import { useDispatch } from "react-redux";
import { authActions } from "../Store/userAuth-slice";

import { useHistory } from "react-router-dom";

import db from "../data/firebase";
import { doc, setDoc } from "firebase/firestore";

import { apiKeyFirebase } from "../data/apiKey";

const useRegister = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  async function register(userName, enterEmail, enterPassowrd) {
    try {
      if (userName.length < 3) {
        dispatch(
          authActions.login({
            token: null,
            email: null,
            isLoggedIn: false,
            statusLogin: "USER_LENGTH_3",
          })
        );
        return;
      }
      if (enterEmail.length <= 3) {
        dispatch(
          authActions.login({
            token: null,
            email: null,
            isLoggedIn: false,
            statusLogin: "EMAIL_LENGTH_6",
          })
        );
        return;
      }
      if (enterPassowrd.length < 6) {
        dispatch(
          authActions.login({
            token: null,
            email: null,
            isLoggedIn: false,
            statusLogin: "PASSWORD_LENGTH_6",
          })
        );
        return;
      }
      const request = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKeyFirebase}`,
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
            email: resp.email,
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
            email: null,
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
