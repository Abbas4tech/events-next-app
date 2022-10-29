import React, { Fragment } from "react";
import EventItem from "./EventItem";

const EventList = ({ items }) => {
  return (
    <Fragment>
      <ul>
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
