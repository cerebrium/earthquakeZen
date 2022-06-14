/**
 *
 * @param date Date to be formatted
 * @returns string with formatted date
 * @example
 * formatDate(new Date(1523647508250)); // returns "April 13, 2018, 12:25:08 PM"
 */

export const formatDate = (date: Date) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  const time = date.toLocaleTimeString();
  return `${monthNames[monthIndex]} ${day}, ${year}, ${time}`;
};
