// @ts-check
import React from "react";

/**
 *
 * @param {Date} date to format
 * @returns {{formatted: string, iso: string} }
 */
const formattedDate = (date) => {
  const dateObj = date ? new Date(date) : new Date();
  const formatted = dateObj.toDateString();
  const iso = dateObj.toISOString();
  return {
    formatted,
    iso,
  };
};

function Time({ date }) {
  return (
    <time className="Order-date-time" dateTime={formattedDate(date).iso}>
      {formattedDate(date).formatted}
    </time>
  );
}

export default React.memo(Time);
