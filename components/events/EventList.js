import React, { Fragment } from "react";
import EventItem from "./EventItem";
import classes from "./event-list.module.css";
const EventList = ({ items }) => {
  return (
    <Fragment>
      <ul className={classes.list}>
        {items.map(({ id, title, image, date, location }) => (
          <EventItem
            key={id}
            title={title}
            image={image}
            id={id}
            location={location}
            date={date}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default EventList;
