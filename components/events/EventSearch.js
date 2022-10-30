import React, { createRef, Fragment, useEffect, useRef, useState } from "react";

import Button from "../UI/Button";
import classes from "./event-search.module.css";

const dropdowns = [
  { name: "Year", option: ["2021", "2022"] },
  {
    name: "Month",
    option: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "Optober",
      "November",
      "December",
    ],
  },
].map(({ name, option }, ind) => ({
  name,
  for: function () {
    return this.name.toLowerCase();
  },
  options: Array.from({ length: option.length }, (e, i) => ({
    property: ind === 0 ? +option[i] : option[i],
    value: ind === 0 ? option[i] : i + 1,
  })),
}));

const EventSearch = ({ onSearch }) => {
  const [value, setValue] = useState();
  const elementsRef = useRef(dropdowns.map(() => createRef()));

  const submitHandler = (event) => {
    event.preventDefault();
    const yearValue = value[0];
    const monthValue = value[1];
    onSearch(yearValue, monthValue);
  };

  useEffect(() => {
    changeDetector();
  }, []);

  const changeDetector = () => {
    const nextValues = elementsRef.current.map((ref) => ref.current.value);
    setValue(nextValues);
  };

  return (
    <Fragment>
      <form className={classes.form} onSubmit={submitHandler}>
        <section className={classes.controls}>
          {dropdowns.map((option, i) => (
            <article className={classes.control} key={option.name}>
              <label htmlFor={option.for()}>{option.name}</label>
              <select
                onChange={changeDetector}
                ref={elementsRef.current[i]}
                id={option.for()}
              >
                {option.options.map(({ property, value }) => (
                  <option key={value} value={value}>
                    {property}
                  </option>
                ))}
              </select>
            </article>
          ))}
        </section>
        <Button>Find Events</Button>
      </form>
    </Fragment>
  );
};

export default EventSearch;
