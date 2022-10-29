/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Button from "../UI/Button";
import classes from "./event-item.module.css";

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
            <time>{humanReadableDate}</time>
          </section>
          <section className={classes.address}>
            <address>{formattedAddress}</address>
          </section>
        </article>
        <article className={classes.actions}>
          <Button link={exploreLink}>Explore Events</Button>
        </article>
      </section>
    </li>
  );
};

export default EventItem;
