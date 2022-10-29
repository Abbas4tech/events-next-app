import Link from "next/link";
import React, { Fragment } from "react";

import classes from "./main-header.module.css";

const MainHeader = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <section className={classes.logo}>
          <Link href="/">NextEvents</Link>
        </section>
        <nav className={classes.navigation}>
          <ul>
            <li>
              <Link href="/events">Browse All Events</Link>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};

export default MainHeader;
