function isleapYear(year) {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

const lip = isleapYear(2025);
console.log(lip);

function isleapYear1(year) {
  if (year % 100 !== 0 && year % 4 === 0) {
    return true;
  }
  if(year % 100 === 0 && year % 400 === 0)
  return false;
}
const lipi = isleapYear1(2050);
console.log(lipi);
