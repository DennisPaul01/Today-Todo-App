import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";

const AlertDialog = (props) => {
  let errorMessage;
  if (props.errorMessage === "EMAIL_EXISTS") {
    errorMessage = "The email address is already in use by another account.";
  }
  if (props.errorMessage === "OPERATION_NOT_ALLOWED") {
    errorMessage = "Password sign-in is disabled for this project.";
  }
  if (
    props.errorMessage ===
    "TOO_MANY_ATTEMPTS_TRY_LATER : Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later."
  ) {
    errorMessage =
      "We have blocked all requests from this device due to unusual activity. Try again later.";
  }
  if (props.errorMessage === "EMAIL_NOT_FOUND") {
    errorMessage =
      "There is no user record corresponding to this identifier. The user may have been deleted.";
  }
  if (props.errorMessage === "EMAIL_NOT_FOUND") {
    errorMessage =
      "There is no user record corresponding to this identifier. The user may have been deleted.";
  }
  if (props.errorMessage === "INVALID_PASSWORD") {
    errorMessage =
      "The password is invalid or the user does not have a password.";
  }
  if (props.errorMessage === "INVALID_EMAIL") {
    errorMessage = "The email is invalid or the user does not have a account.";
  }
  if (props.errorMessage === "MISSING_PASSWORD") {
    errorMessage = "You have to enter a password. The filed is empty.";
  }
  if (props.errorMessage === "USER_DISABLED") {
    errorMessage = "The user account has been disabled by an administrator.";
  }
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle mr={2}>{errorMessage}</AlertTitle>
    </Alert>
  );
};

export default AlertDialog;
