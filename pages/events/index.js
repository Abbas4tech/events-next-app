import React, { Fragment } from "react";

import EventList from "../../components/events/EventList";
import { getAllEvents } from "../../data/dummy-data";

const AllEventPage = () => {
  const events = getAllEvents();

  return (
    <Fragment>
      <EventList items={events} />
    </Fragment>
  );
};

export default AllEventPage;
