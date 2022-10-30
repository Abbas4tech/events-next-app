import { useRouter } from "next/router";
import { Fragment } from "react";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/ResultsTitle";
import Button from "../../components/UI/Button";
import ErrorAlert from "../../components/UI/ErrorAlert";
import { getFilteredEvents } from "../../data/dummy-data";

const FilteredEvents = () => {
  const router = useRouter();
  const filterParams = router.query.slug;

  if (!filterParams) {
    return (
      <Fragment>
        <p className="center">Loading...</p>
      </Fragment>
    );
  }

  const filteredYear = +filterParams[0];
  const filteredMonth = +filterParams[1];

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredYear < 2021 ||
    filteredMonth > 12 ||
    filteredMonth < 1
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid Filter. Please Adjust your values</p>
        </ErrorAlert>
        <section className="center">
          <Button link="/events">Show All Events</Button>
        </section>
      </Fragment>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the choosen filter.</p>
        </ErrorAlert>
        <section className="center">
          <Button link="/events">Show All Events</Button>
        </section>
      </Fragment>
    );
  }

  const date = new Date(filteredYear, filteredMonth - 1);
  console.log(date);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
};
export default FilteredEvents;
