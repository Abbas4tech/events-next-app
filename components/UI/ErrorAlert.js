import classes from "./error-alert.module.css";

const ErrorAlert = ({ children }) => {
  return <article className={classes.alert}>{children}</article>;
};

export default ErrorAlert;
