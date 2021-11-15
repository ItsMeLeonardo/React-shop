import React from "react";

export default function Time({ date }) {
  const formattedDate = (date) => {
    const dateObj = date ? new Date(date) : new Date();
    const formatted = dateObj.toDateString();
    const iso = dateObj.toISOString();
    return {
      formatted,
      iso,
    };
  };

  return (
    <time className="Order-date-time" datatime={formattedDate(date).iso}>
      {formattedDate(date).formatted}
    </time>
  );
}
