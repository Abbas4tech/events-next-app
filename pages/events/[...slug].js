import { useRouter } from "next/router";
import { Fragment } from "react";
import EventList from "../../components/events/EventList";
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
        <p>Invalid Filter. Please Adjust your values</p>
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
        <p>No events found for the choosen filter</p>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <EventList items={filteredEvents} />
    </Fragment>
  );
};
export default FilteredEvents;
