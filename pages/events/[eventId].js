import { useRouter } from "next/router";
import { Fragment } from "react";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import Button from "../../components/UI/Button";
import ErrorAlert from "../../components/UI/ErrorAlert";

import { getEventById } from "../../data/dummy-data";

const EventDetailedPage = () => {
  const router = useRouter();

  const event = getEventById(router.query.eventId);

  if (!event) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No Event Found!</p>
        </ErrorAlert>
        <section className="center">
          <Button link="/">Home</Button>
        </section>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};

export default EventDetailedPage;
