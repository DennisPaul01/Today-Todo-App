import { useDispatch } from "react-redux";
import { authActions } from "../Store/userAuth-slice";

import { useHistory } from "react-router-dom";

import { apiKeyFirebase } from "../data/apiKey";
const useLogin = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  async function login(enterEmail, enterPassowrd) {
    try {
      const request = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKeyFirebase}`,
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

  return login;
};

export default useLogin;
