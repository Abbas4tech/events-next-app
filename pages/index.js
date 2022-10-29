import { Fragment } from "react";
import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../data/dummy-data";

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <Fragment>
      <EventList items={featuredEvents} />
    </Fragment>
  );
}
