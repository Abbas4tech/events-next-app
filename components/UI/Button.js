import Link from "next/link";
import React, { Fragment } from "react";
import classes from "./button.module.css";

const Button = ({ children, link }) => {
  if (link) {
    return (
      <Fragment>
        <Link href={link}>
          <button className={classes.btn}>{children}</button>
        </Link>
      </Fragment>
    );
  }
  return <button className={classes.btn}>{children}</button>;
};

export default Button;
