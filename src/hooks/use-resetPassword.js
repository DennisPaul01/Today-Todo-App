import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../Store/userAuth-slice";

const useResetPassword = () => {
  const dispatch = useDispatch();
  const tokenUser = useSelector((state) => state.auth.token);
  async function resetPassword(enterNewPassowrd) {
    try {
      const request = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAwl0ONcwp9pJ5gPFBPSwysmgBXBcmTtwI",
        {
          method: "POST",
          body: JSON.stringify({
            idToken: tokenUser,
            password: enterNewPassowrd,
            returnSecureToken: false,
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
            isLoggedIn: true,
            statusLogin: "SUCCES",
          })
        );
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

  return resetPassword;
};

export default useResetPassword;
