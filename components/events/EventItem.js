/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "../UI/Button";
import classes from "./event-item.module.css";

import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

const EventItem = (props) => {
  const { title, image, date, location, id } = props;
  console.log(title);
  const humanReadableDate = new Date(date).toLocaleDateString("en-Us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");

  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={image} alt={title} />
      <section className={classes.content}>
        <article className={classes.summary}>
          <h2>{title}</h2>
          <section className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </section>
          <section className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </section>
        </article>
        <article className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Events</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </article>
      </section>
    </li>
  );
};

export default EventItem;
