import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";

const AlertDialog = (props) => {
  const { errorMessage } = props;
  let errorMessages;
  let status = "error";

  if (errorMessage === "SUCCES") {
    errorMessages = "Your password has ben changed";
    status = "success";
  }
  if (errorMessage === "ERROR INPUT") {
    errorMessages = "The input task field is empty";
    status = "error";
  }
  if (errorMessage === "ERROR DATE") {
    errorMessages = "The input date field is empty";
    status = "error";
  }
  if (errorMessage === "EMAIL_EXISTS") {
    errorMessages = "The email address is already in use by another account.";
  }
  if (errorMessage === "OPERATION_NOT_ALLOWED") {
    errorMessages = "Password sign-in is disabled for this project.";
  }
  if (
    errorMessage ===
    "TOO_MANY_ATTEMPTS_TRY_LATER : Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later."
  ) {
    errorMessages =
      "We have blocked all requests from this device due to unusual activity. Try again later.";
  }
  if (errorMessage === "EMAIL_NOT_FOUND") {
    errorMessages =
      "There is no user record corresponding to this identifier. The user may have been deleted.eqwewqewq";
  }
  if (errorMessage === "EMAIL_NOT_FOUND") {
    errorMessages =
      "There is no user record corresponding to this identifier. The user may have been deleted.";
  }
  if (errorMessage === "INVALID_PASSWORD") {
    errorMessages =
      "The password is invalid or the user does not have a password.";
  }
  if (errorMessage === "INVALID_EMAIL") {
    errorMessages = "The email is invalid or the user does not have a account.";
  }
  if (errorMessage === "MISSING_PASSWORD") {
    errorMessages = "You have to enter a password. The filed is empty.";
  }
  if (errorMessage === "USER_DISABLED") {
    errorMessages = "The user account has been disabled by an administrator.";
  }
  return (
    <Alert status={status}>
      <AlertIcon />
      <AlertTitle fontSize="sm" mr={2}>
        {errorMessages}
      </AlertTitle>
    </Alert>
  );
};

export default AlertDialog;
