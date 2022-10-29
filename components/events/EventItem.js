/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

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
    <li>
      <img src={image} alt={title} />
      <section>
        <article>
          <h2>{title}</h2>
          <section>
            <time>{humanReadableDate}</time>
          </section>
          <section>
            <address>{formattedAddress}</address>
          </section>
        </article>
        <article>
          <Link href={exploreLink}>Explore Events</Link>
        </article>
      </section>
    </li>
  );
};

export default EventItem;
