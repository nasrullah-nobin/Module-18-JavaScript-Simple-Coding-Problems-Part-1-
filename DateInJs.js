// const today = new Date();
// console.log(today);
// const date = new Date("2062-9-09");
// console.log(date);
// console.log(date.getMonth());
// console.log(date.getDay());
// const specificDate = new Date(2091, 0, 26);
// console.log(specificDate)
// specificDate.setMonth(10)
// console.log(specificDate.toLocaleString('en-GB'))

const today = new Date();
console.log(today.toLocaleDateString());
console.log(
  "day:",
  today.getDate(),
  "Month:",
  today.getMonth() + 1,
  "Year:",
  today.getFullYear(),
);
console.log(
  "Hours:",
  today.getHours(),
  "minutes:",
  today.getMinutes(),
  "second:",
  today.getSeconds(),
);
console.log(
  `Date: ${today.getDate()} / Month: ${today.getMonth() + 1} / Year: ${today.getFullYear()}`,
);

