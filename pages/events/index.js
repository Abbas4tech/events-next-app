import { useRouter } from "next/router";
import React, { Fragment } from "react";

import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";
import { getAllEvents } from "../../data/dummy-data";

const AllEventPage = () => {
  const events = getAllEvents();
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const redirectUrl = `/events/${year}/${month}`;
    router.push(redirectUrl);
  };

  return (
    <Fragment>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
};

export default AllEventPage;
